import React from 'react';


class Header extends React.Component {
  render() {
    return (
     <ul className="nav justify-content-center">
         <li className="nav-item">
             <a className="nav-link active" href="https://www.google.com/">Active link</a>
         </li>
         <li className="nav-item">
             <a className="nav-link" href="https://www.google.com/">Link</a>
         </li>
         <li className="nav-item">
             <a className="nav-link disabled" href="https://www.google.com/">Disabled link</a>
         </li>
     </ul>
    );
  }
}


export default Header;
