import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/layout/_detail.scss';

class CharacterDetail extends React.Component{
 render(){
   let status = <i class="far fa-smile"></i>;
     if( this.props.status !== "Alive"){
       status = <i class="fas fa-skull-crossbones"></i>;
      }else if( this.props.status === "unknown"){
       status = <i class="fas fa-question"></i>;
    }
   let species = <i class="fas fa-user-alt"></i>;
      if (this.props.species !== "Human"){
        species = <i class="fab fa-reddit-alien"></i>;
      }
   return(
     <div className="character-detail">
       <div className="card">
         <div className="card-btn" > 
           <Link to='/character'>
             <button className="btn-back"> X </button>
           </Link>
         </div>
         <li className="details-wrapper">
            <img src={this.props.image} alt="Foto del personaje"></img>
            <div className="details">
             <h3>Nombre: {this.props.name}</h3>
             <section className="characteristics">
               <h4>Especie: {species}</h4>
               <h4>Planeta de origen: {this.props.origin}</h4>
               <h4>Episodios en los que aparece: {this.props.episode}</h4>
               <h4>Estado: {status}</h4>
             </section>
           </div>
         </li>
        </div>
      </div>
   )
  }
}




export default CharacterDetail;