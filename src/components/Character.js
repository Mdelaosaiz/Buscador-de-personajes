import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/layout/_character.scss';
// Información sobre 20 personajes de la serie. De cada uno, vamos a pintar al menos:Foto, Nombre y Especie.


class Character extends React.Component{
  render(){
    return(
      <>
      {/* El siguiente link nos va a ayudar a vincular la tarjeta de cada personaje con la del Detail */}
        <Link to={`/character/${this.props.id}`} style={{ textDecoration: 'none' }}>
          <li className="character">
            <img src={this.props.image} alt="Foto del personaje"></img>
            <div className="details">
              <h3>Nombre: {this.props.name}</h3>
              <h3>Especie: {this.props.species}</h3>
            </div>
          </li>
        </Link>
      </>
    );
   }
}

export default Character;