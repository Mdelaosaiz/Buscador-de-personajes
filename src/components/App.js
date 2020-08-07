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
    this.renderCharacterDetail =this.renderCharacterDetail.bind(this);
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


  renderCharacterDetail (props){
    // busco si el id está en el objeto del estado.
    let key = props.match.params.id;
    console.log("key" + key);
    let charSelected = this.state.characters.find((item) => {
       return item.id === parseInt(key);
      });
    if(charSelected === undefined){
      //si no está, hago un fetch de getcharacter si está, lo pinto si no está le pongo el <p> con la frase.
      return <p className ="error">Este personaje es de una realidad paralela encriptada</p>
    }else {//TODO
      //si está pinto el objeto 
      return (<CharacterDetail image="" name="" species="" origin="" episode="" status=""></CharacterDetail>)
    }

  }
  render(){
   return (
      <div className="App">
        <Filter changeText={this.handleFilterText}></Filter>
        <CharacterList characterArray ={this.state.characters}></CharacterList>
        <Switch>
         <Route exact path='/character/:id' render={this.renderCharacterDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;


//TODO hacer un localStore para dejar guardada la búsqueda.