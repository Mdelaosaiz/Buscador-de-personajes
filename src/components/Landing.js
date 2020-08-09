import React from 'react';
import '../stylesheets/layout/_landing.scss';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div
          className='landing-img'
          alt='Imagen Rick y Morty'
        />
         <Link to='/character' title='Comenzar la búsqueda'> 
             <button type="button"className='landing-button' >
                dale 
     </button></Link>
      </div>
    );
  }
}

export default Landing;