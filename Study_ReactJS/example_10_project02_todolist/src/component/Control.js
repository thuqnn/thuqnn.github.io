import React from "react";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      
    };
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  onClick = (sortBy,sortValue) => {
    
    this.props.onSort(sortBy,sortValue);
  }

  render() {
    var { keyword } = this.state;
    return (
      <div className="row">
        <div className="col-md-8">
          <form className="form-inline my-3">
            <input
              className="form-control mr-sm-2"
              name="keyword"
              value={keyword}
              onChange={this.onChange}
            />
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="button"
              onClick={this.onSearch}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-md-4 my-3">
           {/* Example single danger button */}
      <div className="btn-group">
        <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </button>
        <div className="dropdown-menu">
          <li className="dropdown-item" 
          onClick = {() => {this.onClick('name',1)}}
          
          >Ten A - Z <span className={(this.props.sortBy === "name" && this.props.sortValue === 1) ? "fa fa-check" : ""}></span></li>
          <li className="dropdown-item" 
           onClick = {() => {this.onClick('name',-1)}}
          >Ten Z - A <span className={(this.props.sortBy === "name" && this.props.sortValue === -1) ? "fa fa-check" : ""}></span></li>
          <div className="dropdown-divider" />
          <li className="dropdown-item"
          onClick = {() => {this.onClick('status',1)}}
          >Enable <span className={(this.props.sortBy === "status" && this.props.sortValue === 1) ? "fa fa-check" : ""}></span></li>
          <li className="dropdown-item" 
           onClick = {() => {this.onClick('status',-1)}}
          >Disable <span className={(this.props.sortBy === "status" && this.props.sortValue === -1) ? "fa fa-check" : ""}></span></li>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default Control;
