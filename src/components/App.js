import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/layout/App.scss';
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
      characters: [],
      FilterText: ''
    } 
    //bindeamos los handlers que se van creando.
    this.handleFilterText = this.handleFilterText.bind(this);
    this.renderCharacterDetail =this.renderCharacterDetail.bind(this);
  }
  
   //El fetch.
  FetchCharacter(){
    
    fetch(listCharacters + 'name=' + this.state.FilterText)
      .then((response) => response.json())
      .then(data =>{
        this.setState({characters : data.results});
      });
  }      

   //Tenemos que cambiar el estado por los handlers que nos llegan desde el filter.
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
      //Si no está le pongo el <p> con la frase.
      return <p className ="error">Este personaje está en busca y captura, si lo encuentras, avisa a La Ciudadela... ellos sabrán qué hacer...</p>
    }else {//TODO
      //Si está pinto el objeto 
      return (<CharacterDetail image="" name="" species="" origin="" episode="" status=""></CharacterDetail>)
    }

  }
  render(){
   return (
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>  
        <Filter changeText={this.handleFilterText}></Filter>
        <CharacterList characterArray ={this.state.characters}></CharacterList>
        <Switch>
          <Route exact path='/character/:id' render={this.renderCharacterDetail}/>
        </Switch> */}
                <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/character">
          <Filter changeText={this.handleFilterText}></Filter>
        <CharacterList characterArray ={this.state.characters}></CharacterList>
        <Switch>
          <Route exact path='/character/:id' render={this.renderCharacterDetail}/>
        </Switch>
          </Route>
        </Switch>  
        {/* <Filter changeText={this.handleFilterText}></Filter>
        <CharacterList characterArray ={this.state.characters}></CharacterList>
        <Switch>
          <Route exact path='/character/:id' render={this.renderCharacterDetail}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;


