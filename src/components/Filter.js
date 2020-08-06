import React from 'react';

//El filter consiste en poder buscar los personajes por nombre, hay que tener en cuenta si las letras están en mayúscula / minúscula para la búsqueda.

class Filter extends React.Component{
  //tenemos que colocar el handler en el onchage, bindearlo y hacerle evento
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
        //  onChange={} 
        />
      </form>
    );
   }
}

export default Filter;