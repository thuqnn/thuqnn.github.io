import React from 'react';


class Reset extends React.Component {
  onSettingReset = () => {
    this.props.onSettingResetDefaul(true);
  }
  render() {
    return (
        <button  className="btn btn-success btn-block" onClick = {this.onSettingReset}>Reset</button>
    );
  }
}


export default Reset;
