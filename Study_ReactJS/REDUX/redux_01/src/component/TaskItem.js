import React from "react";

class TaskItem extends React.Component {
  onUpdateStatusButton = () => {
   this.props.onUpdateStatusTaskItem(this.props.tasks.id);
  }
  onUpdateDeleteButton = () =>{
    this.props.onDeleteTaskItem(this.props.tasks.id);
  }
  onUpdateButton = () => {
    this.props.onUpdateTaskItem(this.props.tasks.id);
  }
  render() {
      var {tasks,index} = this.props;
    return (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{tasks.name}</td>
        <td className="text-center">
          <span className={tasks.status === true ? "bg-success p-2" : "bg-danger p-2"}
          onClick = {this.onUpdateStatusButton}
          >{tasks.status === true ? "Active" : "Disable"}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning"
          onClick = {this.onUpdateButton}
          >
            <span className="fa fa-pencil-square">Edit</span>
          </button>
          <button
            type="button"
            className="btn btn-danger float-right"
            onClick = {this.onUpdateDeleteButton}
          >
            <span className="fa fa-trash-o">Delete</span>
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
