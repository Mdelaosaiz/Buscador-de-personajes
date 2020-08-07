import React from 'react';
import Character from './Character';

// Vamos a crear el listado de todos los personajes qeu nos llegan desde la Api. 
class CharacterList extends React.Component {

// tenemos que recorrer el array con un map, para que pinte todos los personajes.

 render(){
   console.log(this.props.characterArray);
   let characters = this.props.characterArray.map( item => {
     
     return (
       <Character
         key= {item.id}
         image={item.image}
         name={item.name}
         species={item.species}
       />
     );
    });
 
   return(
     <ul className="characterList">{characters}</ul>
    );
  }
}

export default CharacterList;