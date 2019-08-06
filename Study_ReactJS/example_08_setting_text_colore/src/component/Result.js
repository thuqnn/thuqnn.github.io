import React from 'react';

class Result extends React.Component {
  setStyle(){
    return {
      color : this.props.color,
      borderColor : this.props.color,
      fontSize : this.props.fontSize
    }
  }
  render() {
    return (
        <div className="col-md-12">
        <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px </p>
        <div className="content" style={this.setStyle()}>
          Noi dung hien thi</div>
      </div>
    );
  }
}


export default Result;
