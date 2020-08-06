import React from 'react';
// información sobre 20 personajes de la serie. De cada uno, vamos a pintar al menos:Foto, Nombre y Especie.

class Character extends React.Component{
  render(){
    return(
      <li className="character-wrapper">
         <img src={this.props.image} alt="Foto del personaje"></img>
         <div>
          <h3>Nombre:{this.props.name}</h3>
          <h4>Especie:{this.props.species}</h4>
         </div>
       </li>
    );
   }
}

export default Character;