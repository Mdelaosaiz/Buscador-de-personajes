import React from 'react';
import Character from './Character';
import '../stylesheets/layout/_charlist.scss';

// Vamos a crear el listado de todos los personajes qeu nos llegan desde la Api. 
class CharacterList extends React.Component {
 render(){
   console.log(this.props.characterArray);
   let characters = this.props.characterArray.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
    }).map( item => {
      return (
       <Character
         key= {item.id}
         id= {item.id}
         image={item.image}
         name={item.name}
         species={item.species}
       />
      );
    });
 
   return(
     <div className="list-wrapper">
       <ul className="characterList">{characters}</ul>
     </div>
    );
  }
}

export default CharacterList;