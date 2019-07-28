import React from 'react';
import './App.css';
import Header from './component/Header'
import Product from './component/Product'
class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
       
        <div className="row">
         <div className="col-md-6">
         <Product/>
         </div>
         <div className="col-md-6">
         <Product/>
         </div>
        </div>
        
      </div>
    );
  }
}


export default App;
