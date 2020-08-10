import React from 'react';
import Character from './Character';
import '../stylesheets/layout/_charlist.scss';

// Vamos a crear el listado de todos los personajes qeu nos llegan desde la Api. 
class CharacterList extends React.Component {

  renderContent(){
    
    if(this.props.characterArray == null || this.props.characterArray.length === 0){
      return <p className="errorP"> O este personaje no existe... o La Ciudadela lo ha encontrado antes... </p>
      }else{
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
         return <ul className="characterList">{characters}</ul>
       }
  }

 render(){
    return(
     <div className="list-wrapper">
       {this.renderContent()}
     </div>
    );
  }
}

export default CharacterList;