import React from 'react';


class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      objColor : ['red','green','blue','brown','yellow','aqua','gray','violet']
    };
  }
  showColor(colors){
    return {
      backgroundColor : colors
    }
  }
  setActiveColor(colors){
    this.props.onReceiveColor(colors)
  }
  render() {
    var elementsColor = this.state.objColor.map((colors,index) =>{
      return  <span key={index} 
                    style={this.showColor(colors)}
                    className = {this.props.color === colors ? 'active' : ' '}
                    onClick={()=>{this.setActiveColor(colors)}}>
              </span>
    })
    return (
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              Color Picker
            </div>
            <div className="card-body">
             {elementsColor}
            </div>
          </div>
        </div>
    );
  }
}


export default ColorPicker;
