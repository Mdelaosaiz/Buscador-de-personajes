import React from 'react';

//El filter consiste en poder buscar los personajes por nombre, hay que tener en cuenta si las letras están en mayúscula / minúscula para la búsqueda.

class Filter extends React.Component{
  //tenemos que crear el constructor donde va el handler del onchage y bindearlo.
  constructor(props) {
    super(props);
    this.handleFilterText = this.handleFilterText.bind(this);
  }
  //creamos el evento del cambio
  handleFilterText(ev){
    this.props.changeText(ev.currentTarget.value);
  }

  render(){
    return(
      <form>
        <label className='label' htmlFor='name'>
            Busca un personaje:
        </label>
        <input 
         type='text' className='name' 
         placeholder= 'personaje'
         id='name' 
         onChange={this.handleFilterText} 
        />
      </form>
    );
   }
}

export default Filter;