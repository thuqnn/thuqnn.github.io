import React from 'react';

class Product extends React.Component {
 
  onBuyUser(){
    console.log("day la app component");
  }
  onBuyUser2(text){
    console.log(text);
  }

  constructor(props){
    super(props);
    this.onBuyUser3 = this.onBuyUser3.bind(this);
  }
  onBuyUser3(){
    alert(this.props.name + '-' + this.props.price);
  }

  onBuyUser4 = () => {
    alert(this.props.name + '-' + this.props.price);
  }
  render() {
    return (
      <div>
      <div className="card">
        <img className="card-img-top" src="holder.js/100x180/" alt="" />
        <div className="card-body">
          <img src={this.props.image} alt={this.props.name}></img>
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.price}</p>
          <a name="" id="" className="btn btn-primary" href="https://www" role="button" onClick={this.onBuyUser}>MUA NGAY</a> 
          <a name="" id="" className="btn btn-primary" href="https://www" role="button" onClick={()=>{this.onBuyUser2('abc')}}>MUA NGAY 2</a>
          <a name="" id="" className="btn btn-primary" href="https://www" role="button" onClick={this.onBuyUser3}>MUA NGAY 3</a>  
          <a name="" id="" className="btn btn-primary" href="https://www" role="button" onClick={this.onBuyUser4}>MUA NGAY 4</a>  
        </div>
      </div>
      </div>
    );
  }
}


export default Product;
