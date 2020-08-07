import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    this.characterDetail =this.characterDetail.bind(this);
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
  characterDetail (props){
    
  }
  render(){
   return (
      <div className="App">
       <Switch>
         <Route exact path='/'>
           <Filter changeText={this.handleFilterText}></Filter>
           <CharacterList characterArray ={this.state.characters}></CharacterList>
         </Route>
         <Route path='/character/:id' render={this.characterDetail}/>
       </Switch>
      </div>
    );
  }
}

export default App;


