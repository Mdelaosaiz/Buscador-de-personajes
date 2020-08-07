import React from 'react';
import {Link} from 'react-router-dom';
// información sobre 20 personajes de la serie. De cada uno, vamos a pintar al menos:Foto, Nombre y Especie.
//hay que hacer un onclick sobre la tarjeta para que pueda llevarnos al CharacterDetail

class Character extends React.Component{
  render(){
    return(
      <>
        <Link to={`/character/${this.props.id}`} style={{ textDecoration: 'none' }}>
           <li className="character-wrapper">
             <img src={this.props.image} alt="Foto del personaje"></img>
             <div>
               <h3>Nombre:{this.props.name}</h3>
               <h4>Especie:{this.props.species}</h4>
             </div>
           </li>
        </Link>
      </>
    );
   }
}

export default Character;