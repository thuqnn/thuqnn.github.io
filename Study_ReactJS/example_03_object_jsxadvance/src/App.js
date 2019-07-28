import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    var a = 5;
    var b = 9;
    var name = "thuqnn";
    var objProduct = { //1 object
      id: "thuqnn",
      name: "phamthithu",
      price: 11282882,
      status: false
    }
    var arrObj = [ // arr object
      { id: "1",
      name: "hoang van son",
      age: 80},
      { id: "2",
      name: "nguyen van hai",
      age: 22},
      { id: "3",
      name: "dinh thi lan",
      age: 51}
    ]
    var elements = arrObj.map((arrObj,index) => {
      return <div key={arrObj.id}>
        <strong>
          id cua ban la : {arrObj.id},
          name la : {arrObj.name},
          tuoi la : {arrObj.age}
        </strong>
      </div>
    })
    return (
      <div>
     <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="https://www.facebook.com/">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="https://www.facebook.com/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://www.facebook.com/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="https://www.facebook.com/">Action 1</a>
                <a className="dropdown-item" href="https://www.facebook.com/">Action 2</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="left">
       <h2> a: {a};</h2>
       <h1>b: {b};</h1> 
       <h1 className="text-center">total: {a * b}</h1>
       <p> name account: {name};</p>
       <em> id = {objProduct.id};<br/>
        name = {objProduct.name};<br/>
       so luong = {objProduct.price};</em><br/>
      <h1>trang thai: {objProduct.status ? "Active" : "Disable"}</h1>
      <hr></hr>
      <h1>
        {elements}
      </h1>
      </div>
     </div>
    );
  }
}


export default App;
