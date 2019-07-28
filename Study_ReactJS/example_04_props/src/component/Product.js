import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
      <div className="card">
        <img className="card-img-top" src="holder.js/100x180/" alt="" />
        <div className="card-body">
          <img src={this.props.image} alt={this.props.name}></img>
          <h4 className="card-title">{this.props.name}</h4>
          <p className="card-text">{this.props.price}</p>
          <a name="" id="" className="btn btn-primary" href="https://www.youtube.com" role="button">MUA NGAY</a>
        </div>
      </div>
      </div>
    );
  }
}


export default Product;
