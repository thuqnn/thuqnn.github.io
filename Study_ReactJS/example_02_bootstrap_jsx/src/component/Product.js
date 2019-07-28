import React from 'react';


class Product extends React.Component {
  render() {
    return (
                <div className="card-group">
                  <div className="card">
                    <img className="card-img-top" src="https://anhnendep.net/wp-content/uploads/2016/03/hinh-nen-dien-thoai-hinh-hoa-tuyet-dep-cho-dien-thoai-info.jpg" alt="phto" />
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top" src="http://2.bp.blogspot.com/-IH7ZO4ygaqI/VcB3b1fl9oI/AAAAAAAAGUk/o7skepQMaVA/s1600/hinh%2Banh%2Bhoa%2Bngoc%2Blan%2Bdep%2Btrong%2Bthien%2Bnhien8.jpg" alt="haiyss" />
                    <div className="card-body">
                      <h4 className="card-title">Title</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>
                </div>
    );
  }
}


export default Product;
