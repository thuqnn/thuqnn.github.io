import React from 'react';
import './App.css';
import Product from './component/Product'
class App extends React.Component {
  onClick(){
    alert("BAN DA BAT DC SU KIEN");
  }
  onAddProduct = ()=>{
    console.log(this.refs.names.value);
  }
  render() {
    var objIphone = [
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
    ]
    let elements = objIphone.map((objIphone,index)=>{
      let result = '';
      if(objIphone.status){
        result = <Product key={objIphone.id} name={objIphone.name}
        price={objIphone.price}
        image={objIphone.image}> </Product>;
      }
       return result;
     
    })
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="https://magic.reactjs.net">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="https://magic.reactjs.net">Home</a>
            </div>
        </nav>
        <div className="container">
          <div className="row">
          <div className="col-md-12">
          <div className="form-group">
        <label> Ten san pham</label>
        <input type="text" className="form-control" ref = "names"/>
        <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Send</button>
      </div>
            </div>
            <div className="col-md-12">
             {elements}
            </div>
            <div class="col-md-12">
              <button type="button" name="" id="" className="btn btn-primary" onClick={this.onClick}>Click me</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
