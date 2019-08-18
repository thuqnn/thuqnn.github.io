import React from "react";
import TaskItem from "./TaskItem";
class TaskList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterName : '',
      filterStatus : -1 //all -1 active 1 disable 0
    }
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilterTaskList(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    )
    this.setState({
      [name] : value
    })

  }
  render() {
      var {tasks} = this.props; // var tasks = this.props.tasks
      var {filterName,filterStatus} = this.state;
      var elementTasks = tasks.map((tasks,index) => {
          return <TaskItem key={tasks.id} 
          index = {index} 
          tasks = {tasks}
          onUpdateStatusTaskItem = {this.props.onUpdateStatusTaskList}
          onDeleteTaskItem = {this.props.onDeleteTaskList}
          onUpdateTaskItem = {this.props.onUpdateTaskList}
          />;
      })
    return (
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <input type="text" className="form-control" 
              name="filterName"
              value ={filterName}
              onChange = {this.onChange}
              />
            </td>
            <td>
              <select className="custom-select"
              name= "filterStatus"
              value = {filterStatus}
              onChange = {this.onChange}
              >
                <option value={-1}>All</option>
                <option value={0}>Disable</option>
                <option value={1}>Enable</option>
              </select>
            </td>
            <td />
          </tr>
         {elementTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
