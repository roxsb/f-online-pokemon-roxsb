import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom';

class PokemonDetails extends Component {

  render() {  

    const pokemonId = this.props.match.params.id;
    const {listPokemonResult} = this.props;      
    console.log('pokeid'+ pokemonId);
    const selectedPokemon = listPokemonResult[pokemonId -1];
    const evolutionPokemon = listPokemonResult[pokemonId -2];
    const { id, image, name, types } = this.props;
    
    // pokemonEvolution(){
    //   if (id != 0,3,6,9){
    //     return(

    //     )
    //   }
    // }

    if (listPokemonResult.length === 0){
      return(
        <p className="alert">Cant find this pokemon</p>
      );
    }else{
      const name = selectedPokemon.name;
      const image = selectedPokemon.image;
      const types = selectedPokemon.types;
      const height = selectedPokemon.height;
      const weight = selectedPokemon.weight;
      const evolution = evolutionPokemon.name;
      
        return (
          <Fragment>
            <div className="pokemon_moreinfo-container">        
              <div className="pokemon_img-container">
                <img className="pokemon_img" src={image} alt={name} />
              </div>
              <div className="pokemon_detail">
                <h2 className="pokemon_detail-name">Name: {name}</h2>                         
                <p className="pokemon-detail-weight">weight: {weight}</p>
                <p className="pokemon-detail-height">height: {height}</p>
                <p>evolution from: {pokemonId == [1,4,7,10] ? "" : evolution}</p>
                <div className="pokemon_detail-types">
                  <p>Types: </p>
                    <ul className="pokemon_type">
                      {types.map((item, index) => {
                      return (                
                        <li className="pokemon_type-list" key={index}>{item.type.name}</li>
                      )
                      })}
                    </ul>
                </div>
              </div>
            </div>              
            <div className="link_container">
              <Link to = "/" className="link_return">Return</Link>   
            </div>          
          </Fragment>
        );                  
    }       
  }
}

export default PokemonDetails;