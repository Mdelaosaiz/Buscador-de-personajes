import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/layout/App.scss';
import Header from './Header';
import Landing from './Landing';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filter from './Filter';

//Api limpia desde donde conseguimos la lista de personajes.

const listCharacters = 'https://rickandmortyapi.com/api/character/?';

class App extends React.Component{
  constructor (props){
   super(props);
   this.state ={
   //Aquí colocamos todo lo que queremos guardar vacío.
      characters: []
    } 
    //bindeamos los handlers que se van creando.
    this.handleFilterText = this.handleFilterText.bind(this);
    this.renderCharacterDetail =this.renderCharacterDetail.bind(this);
  }
  
   //El fetch.
  FetchCharacter(filter){
    fetch(listCharacters + 'name=' + filter)
      .then((response) => response.json())
      .then(data =>{
        this.setState({characters : data.results});
      });
  }      

   //Tenemos que cambiar el estado por los handlers que nos llegan desde el filter.
   handleFilterText(text){
    console.log("textWritten: " + text);
    this.FetchCharacter(text);
  }


  renderCharacterDetail (props){
    // busco si el id está en el objeto del estado.
    let key = props.match.params.id;
    console.log("key" + key);
    let charSelected = this.state.characters.find(
      (item) => {
       return item.id === parseInt(key);
       });
        if(charSelected === undefined){
         //Si no está le pongo el <p> con la frase. TODO
         return (<> </>)
        }else {
       //Si está pinto el objeto 
          return (
           <CharacterDetail 
             image= {charSelected.image} 
             name= {charSelected.name}
             species= {charSelected.species} 
             origin= {charSelected.origin.name} 
             episode= {charSelected.episode.length} 
             status= {charSelected.status}>
            </CharacterDetail>
          )
        }
  }
  render(){
   return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/character">
          <Header />
           <Filter changeText={this.handleFilterText}></Filter>
           <CharacterList characterArray ={this.state.characters}></CharacterList>
           <Switch>
             <Route exact path='/character/:id' render={this.renderCharacterDetail}/>
           </Switch>
          </Route>
        </Switch>  
      </div>
    );
  }
}

export default App;


