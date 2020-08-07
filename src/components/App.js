import React from 'react';
import '../App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filter from './Filter';
//api desde donde conseguimos la lista de personajes

const listCharacters = 'https://rickandmortyapi.com/api/character/?';
class App extends React.Component{
  constructor (props){
   super(props);
   this.state ={
   //Aquí colocamos todo lo que queremos guardar vacío.
      characters: [],
      FilterText: ''
    } 
    //bindeamos los handlers que se van creando.
    this.handleFilterText = this.handleFilterText.bind(this);
  }
  
   //hay que hacer el fetch.
  FetchCharacter(){
    
    fetch(listCharacters + 'name=' + this.state.FilterText)
      .then((response) => response.json())
      .then(data =>{
        this.setState({characters : data.results});
      });
  }      

   //tenemos que cambiar el estado con los handlers que nos llegan desde el filter.
   handleFilterText(text){
    console.log(text);
    this.setState({FilterText:text});
    this.FetchCharacter();
  }
  render(){
   return (
      <div className="App">
       <Filter changeText={this.handleFilterText}></Filter>
       <CharacterList characterArray ={this.state.characters}></CharacterList>
       <CharacterDetail></CharacterDetail>
      </div>
    );
  }
}

export default App;
