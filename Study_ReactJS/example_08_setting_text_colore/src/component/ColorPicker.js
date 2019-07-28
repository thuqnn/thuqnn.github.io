import React from 'react';


class ColorPicker extends React.Component {
  render() {
    return (
      <div className="container mt-50">
          <div className="row">
            <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
              
              </div>
            </div>
            </div>
            <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Featured
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button  className="btn btn-primary">Giam</button>
                <button  className="btn btn-primary">Tang</button>
              </div>
              <button  className="btn btn-success btn-block">Reset</button>
            </div>
            </div>
            <div className="col-md-12">
              <p>Color: Red - Fontsize: 15px </p>
              <div className="content">Noi dung hien thi</div>
            </div>
          </div>
      </div>
    );
  }
}


export default ColorPicker;
