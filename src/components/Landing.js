import React from 'react';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <img
          className='landing-img'
          src='../images/RickyMorty.jpg'
          alt='Imagen Rick y Morty'
        />
         <Link to='/' className='landing-button' title='Comenzar la búsqueda'>Comenzar</Link>
      </div>
    );
  }
}

export default Landing;