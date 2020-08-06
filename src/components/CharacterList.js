import React from 'react';
import Character from './Character';

// Vamos a crear el listado de todos los personajes qeu nos llegan desde la Api. 
class CharacterList extends React.Component {
  
// tenemos que recorrer el array con un map, para que pinte todos los personajes.

 render(){
  // return (
  //   <Character
  //   key= {item.Character.id}
  //   image={item.Character.image}
  //   name={item.Character.name}
  //   species={item.Character.species}
  //   />
  //   );

 
   return(
     <ul className="characterList">
     </ul>
    );
  }
}

export default CharacterList;