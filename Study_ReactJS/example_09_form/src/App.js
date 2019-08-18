import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      txtMail : 'abc@gmail.com',
      txtPassWord : '123',
      txtDescription : 'aaa',
      sltGender : 0,
      status : 'Enable',
      chkBox : true
    };
  }
  onHanldeChange = (event) => {
    var target = event.target;
    var name = target.name;
    // var value = target.value; neu khong co check box
    var value = target.type === "checkbox" ? target.checked : target.value //if co checkbox
    this.setState({
      [name] : value
    })
  }
  onChangeSubmit = (event) =>{
    event.preventDefault(); //ngan submit loader
    console.log(this.state);
  }
  onChangeReset = (event) =>{
    this.setState({
      txtMail : '',
      txtPassWord : '',
      txtDescription : '',
      sltGender : 0,
      status : '',
      chkBox : true
    });
  }
  render() {
    return (
      <div className="container mt-30">
        <div className="row justify-content-center">
          <div className="col-md-8">
          <form onSubmit = {this.onChangeSubmit} onReset = {this.onChangeReset}>
              <div className="form-group">
              <label >Email address</label>
              <input type="email" className="form-control"
              name = "txtMail" 
              onChange = {this.onHanldeChange}
              value = {this.state.txtMail}
              />
            </div>
          <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control"
          name = "txtPassWord" 
          onChange = {this.onHanldeChange}
          value = {this.state.txtPassWord}
          />
          </div>
          <div className="form-group">
          <label >Description</label>
            <textarea className="form-control" 
                name="txtDescription" 
                onChange = {this.onHanldeChange}
                value = {this.state.txtDescription}
            rows="3"></textarea>
          </div>
          <div className="form-group">
            <label >Select</label>
            <select className="form-control" 
                name="sltGender" 
                onChange = {this.onHanldeChange}
                value = {this.state.sltGender}>
                
              <option value={0}>Male</option>
              <option value={1}>Female</option>
              <option value={2}>Orther</option>
            </select>
          </div>
          <label>Display</label>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" 
              name="status" 
              value="Enable"  
              onChange = {this.onHanldeChange}
              checked = {this.state.status === "Enable"}/>
              Display Enable
            </label> <br/>
            <label className="form-check-label">
              <input type="radio" className="form-check-input" 
              name="status" 
              value="Disable"  
              onChange = {this.onHanldeChange}
              checked = {this.state.status === "Disable"}/>
              Display Disable
            </label>
          </div><br/>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" 
              name="chkBox" 
              value={true}
              onChange = {this.onHanldeChange}
              checked = {this.state.chkBox === true}
              />
              
              Display value
            </label>
          </div><br/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-secondary ml-5">Reset</button>
          </form>
               
          </div>
        </div>
      </div>
       )
  }
}


export default App;
