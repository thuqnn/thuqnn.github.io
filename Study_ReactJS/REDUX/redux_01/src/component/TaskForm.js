import React from 'react';

class TaskForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name : '',
      status : false
    }
  }
  componentWillMount(){
    if(this.props.onTask){
      this.setState({
        id: this.props.onTask.id,
        name: this.props.onTask.name,
        status: this.props.onTask.status
      })
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.onTask){
      this.setState({
        id: nextProps.onTask.id,
        name: nextProps.onTask.name,
        status: nextProps.onTask.status
      })
    }else if(nextProps && nextProps.onTask === null){
      this.setState({
        id: '',
        name : '',
        status : false
      })
    }
  }
  onCloseFormGui = () =>{
    this.props.onCloseForm(); //name props
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === "status"){
      value = target.value === "true" ? true : false
    }
    this.setState({
      [name] : value
    })
  }
  onSubmit = (event) => {
    event.preventDefault(); //ngan load trinh duyet khi submit
    this.props.onSubmit(this.state);
    //cancel and close form add cv
    this.onClear();
    this.onCloseFormGui();
  }
  onClear = () =>{
    this.setState({
      name: '',
      state: false
    })
  }
  render() {
    var {id} = this.state;
    return (
     
      <div className="card">
        <div className="card-header">
         {id !== '' ? "Edit Worker" : "Add Work"}
          <span className="fa fa-times float-right" 
          onClick = {this.onCloseFormGui}
          ></span> 
        </div> 
        <div className="card-body"> 
          <form className="mb-3" onSubmit={this.onSubmit}> 
            <div className="form-group">
              <label>Name : </label>
              <input type="text" className="form-control" 
              name = "name"
              value = {this.state.name}
              onChange = {this.onChange}
              />
            
            <label>Status: </label>
            <select className="custom-select mb-3" 
            name = "status"
            value = {this.state.status} //chu y dat name giong contructor vs name props
            onChange = {this.onChange}
            >
              <option value={false}>Disable</option>
              <option value={true}>Enable</option>
            </select>
            <button type="submit" className="btn btn-warning">
            Save
          </button>
          <button type="button" className="btn btn-danger float-right" onClick = {this.onClear}>
            Cancel
          </button>
          </div>
          </form>
          
        </div>
      </div>
    
    );
  }
}


export default TaskForm;
