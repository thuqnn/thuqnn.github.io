import React from "react";
import "./App.css";
import TaskForm from "./component/TaskForm";
import Control from "./component/Control";
import TaskList from "./component/TaskList";
import {findIndex} from "lodash";

class App extends React.Component {
  constructor(props){ //them sua xoa search filter....
    super(props);
    this.state = {
      tasks : [],  //id,name,status
      taskEdit : null,
      sortBy : 'name',
      sortValue : 1
    }
  }
  componentWillMount(){ //khi f5 duoc goi 1 lan duy nhat
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks,
        isDisplayForm : false
      })
    }
  }
  
  randomString(){
    return Math.floor((1+ Math.random())* 0x10000).toString(16).substring(1);
  }
  gennerateId(){
    return this.randomString() + this.randomString() + '-' + this.randomString() + '-' + 
    this.randomString() + '-' + this.randomString() + '-' + this.randomString() + this.randomString() + this.randomString() + this.randomString();
  }
  onToggleForm = () => {
    if(this.state.isDisplayForm && this.state.taskEdit !== null){
      this.setState({
        isDisplayForm : true,
        taskEdit : null,
        filter : {
          name: '',
          status : -1
        },
        keyword : ''
      })
    }
   else{
    this.setState({
      isDisplayForm : !this.state.isDisplayForm,
      taskEdit : null
    })
   }
  }
  onCloseFormLay = () =>{
    this.setState({
      isDisplayForm : false
    })
  }
  onShowFormLay = () =>{
    this.setState({
      isDisplayForm : true
    })
  }
  onSubmitLay = (data) =>{
    var {tasks} = this.state;
    if(data.id === ''){
      data.id = this.gennerateId();
      tasks.push(data);
    }
    else{
      var index = this.findIndex(data.id);
      tasks[index] = data;

    }
    this.setState({
      tasks : tasks,
      taskEdit: null
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  onUpdateStatus = (id) =>{
    var {tasks} = this.state;
    // var index = this.findIndex(id); c1
    //c2 lodash
    var index = findIndex(tasks,(task) => {
      return task.id === id;
    })
    
    if(index !== -1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks : tasks
      })
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }
  findIndex = (id) =>{
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task,index) => {
      if(task.id === id){
        result = index;
      }
    })
    return result;
  }
  onDeleteUpdate = (id) =>{
   var {tasks} = this.state;
   var index = this.findIndex(id);
   if(index !== -1){
     tasks.splice(index,1);
     this.setState({
       tasks : tasks
     })
     localStorage.setItem('tasks',JSON.stringify(tasks));
   }
   this.onCloseFormLay();
  }
  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEdit : taskEditing
    })
    this.onShowFormLay();
  }
  onFilter = (filterName,filterStatus) => {
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    })
  }
  onSearch = (keyword) => {
    this.setState({
      keyword : keyword.toLowerCase()
    })
  }
  onSort = (sortBy,sortValue) => {
   this.setState({
     sortBy : sortBy,
     sortValue : sortValue
   })
  }
  render() {
    var {tasks,isDisplayForm,taskEdit,filter,keyword,sortBy,sortValue} = this.state; //var tasks = this.state.tasks // lay task, isdisplayform tu contructor state da luu tru
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      tasks = tasks.filter((task) => {
        if(filter.status === -1){
          return tasks;
        }
        else{
          return task.status === (filter.status === 1 ? true : false);
        }
      })
    }
    if(keyword){
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if(sortBy === "name"){
      tasks.sort((a,b) => {
        if(a.name.toLowerCase()>b.name.toLowerCase()) return sortValue
        else if(a.name.toLowerCase()<b.name.toLowerCase()) return -sortValue
        else return 0 ;
      })
    }
    else{
      tasks.sort((a,b) => {
        if(a.status > b.status) return -sortValue
        else if(a.status < b.status) return sortValue
        else return 0 ;
      })
    }
    var elemenTaskForm = isDisplayForm ? 
    <TaskForm 
    onCloseForm = {this.onCloseFormLay} 
    onSubmit= {this.onSubmitLay}
    onTask = {taskEdit}
    /> : '';
    return (
      <div className="container">
        <div className="row justify-content-center p-4">
          <h1>To Do Lists For Task Managerment</h1>
        </div>
        <div className="row">
        <div className={isDisplayForm ? "col-md-4" : ''}>
        {elemenTaskForm}
        </div>
        
          <div className={isDisplayForm ? "col-md-8" : "col-md-12"}>
            <button type="button" 
            className="btn btn-primary"
            onClick = {this.onToggleForm}
            >
              Add Worker
            </button>
            
            <Control 
            onSearch = {this.onSearch}
            onSort = {this.onSort}
            sortBy = {sortBy}
            sortValue = {sortValue}
            />
            <div className="row">
              <div className="col-md-12">
               <TaskList 
               tasks = {tasks} 
               onUpdateStatusTaskList = {this.onUpdateStatus}
               onDeleteTaskList = {this.onDeleteUpdate}
               onUpdateTaskList = {this.onUpdate} 
               onFilterTaskList = {this.onFilter}
               />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
