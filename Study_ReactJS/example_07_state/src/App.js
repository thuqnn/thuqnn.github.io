import React from 'react';
import './App.css';
class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    objIphone: [
      {
        id: 1,
        name: "iphone x",
        price: 20000000,
        image:"https://i-dulich.vnecdn.net/2019/02/26/1-1551149516_680x0.jpg",
        status : true
      },
      {
        id: 2,
        name: "iphone xs max",
        price: 1220000000,
        image:"https://i-dulich.vnecdn.net/2019/02/26/1-1551149516_680x0.jpg",
        status : true
      },
      {
        id: 3,
        name: "iphone xxx",
        price: 420000000,
        image:"https://i-dulich.vnecdn.net/2019/02/26/1-1551149516_680x0.jpg",
        status : true
      }
    ],
    isActive : false
  }
}
addTrueorFalse = () => {
  // if(this.state.isActive === true){
  //   this.setState({
  //     isActive : false
  //   })
  // }
  // else{
  //   this.setState({
  //     isActive : true
  //   })
  // }
  this.setState({
    isActive : !this.state.isActive
  })
}
  render() {
    
    let elements = this.state.objIphone.map((objIphone,index)=>{
      let result = '';
      if(objIphone.status){
        result =  <tr key={index}>
                      <td>{index}</td>
                      <td>{objIphone.name}</td>
                      <td>{objIphone.price}</td>
                  </tr>
      }
       return result;
     
    })
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="https://magic.reactjs.net">State <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="https://magic.reactjs.net">Home</a>
            </div>
        </nav>
        <div classname="container">
        <div classname="row">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Gía</th>
              </tr>
            </thead>
            <tbody>
             {elements}
            </tbody>
          </table>
          <button type="button"  className="btn btn-danger" onClick={this.addTrueorFalse}>
            Active: {this.state.isActive === true ? 'true'  : 'false'}
            </button>
        </div>
      </div>
      </div>
    );
  }
}


export default App;
