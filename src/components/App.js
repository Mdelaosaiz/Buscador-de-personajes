import React from 'react';
import '../App.css';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filter from './Filter';

const App = () =>{
  //tenemos que hacer una lista vacía de los personajes.
  //tenemos que cambiar el estado con los handles qeu nos llegan desde el filter.
  //hay que hacer el fetch.
  return (
    <div className="App">
      <Filter></Filter>
      <CharacterList></CharacterList>
      <CharacterDetail></CharacterDetail>
    </div>
  );
}

export default App;
