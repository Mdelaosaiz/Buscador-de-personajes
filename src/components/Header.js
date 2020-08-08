import React from 'react';
import logo from '../images/logo.png';
import sanchez from '../images/Sanchez.png';
import morty from '../images/morty.png';
import "../stylesheets/layout/_header.scss";


class Header extends React.Component {
  render() {
    return (
      <div className="header">
       <img className="image-Sanchez" src={sanchez} alt="Rick" />
       <img className="image-logo" src={logo} alt="Logo" />
       <img className="image-morty" src={morty} alt="Morty" />
      </div>
    )
  }
}

export default Header;