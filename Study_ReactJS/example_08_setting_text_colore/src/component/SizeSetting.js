import React from 'react';

class SizeSetting extends React.Component {
  ChangeSize(value){
    this.props.onChangeSize(value);
  }
  render() {
    return (
        <div className="card">
        <div className="card-header">
          Size: {this.props.fontSize}px
        </div>
        <div className="card-body">
          <button  className="btn btn-primary" onClick={()=>this.ChangeSize(-2)}>Giam</button>
          <button  className="btn btn-primary" onClick={()=>this.ChangeSize(2)}>Tang</button>
        </div>
      </div>
    );
  }
}


export default SizeSetting;
