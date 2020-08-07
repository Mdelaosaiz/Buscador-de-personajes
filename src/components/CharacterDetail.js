import React from 'react';
import {Link} from 'react-router-dom';

class CharacterDetail extends React.Component{
 render(){
   return(
    <>
      <div className="" > 
         <Link to='/'>
           <button className="btn-back"> Volver </button>
         </Link>
      </div>
      <li className="details-wrapper">
         <img src={this.props.image} alt="Foto del personaje"></img>
         <div>
           <h3>Nombre:{this.props.name}</h3>
           <div className="characteristics">
             <h4>Especie:{this.props.species}</h4>
             <h4>Planeta de origen: {this.props.origin.name}</h4>
             <h4>Episodios en los que aparece: {this.props.episode}</h4>
             <h4>Estado: {this.props.status}</h4>
           </div>
         </div>
       </li>
    </>
   )
  }
}




export default CharacterDetail;