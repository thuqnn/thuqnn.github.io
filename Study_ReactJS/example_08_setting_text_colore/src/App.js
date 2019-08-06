import React from 'react';
import './App.css';
import ColorPicter from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize : 15
    }
    
  }
  onSetColor = (params) => {
    this.setState({
      color : params
    })
  }
  onChangeSize = (value) => {
      this.setState({
        fontSize : (this.state.fontSize + value >= 8 && this.state.fontSize + value <=36 ? this.state.fontSize + value : this.state.fontSize)
      })
  
  }
  onSettingResetDefaul = (value) => {
    if(value){
      this.setState({
        color : 'red',
        fontSize : 15
      })
    }
  }
  render() {

    return (
      <div className="container mt-50">
          <div className="row">
            <ColorPicter color={this.state.color} onReceiveColor={this.onSetColor}/>
            <div className="col-md-6">
            <SizeSetting fontSize = {this.state.fontSize} onChangeSize = {this.onChangeSize}/>
           <Reset onSettingResetDefaul = {this.onSettingResetDefaul}/>
            </div>
            <Result color={this.state.color} fontSize = {this.state.fontSize}/>
          </div>
      </div>
    );
  }
}


export default App;
