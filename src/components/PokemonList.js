import React, { Component } from "react";
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading';
import PokemonDetails from './PokemonDetails';
import {Link} from 'react-router-dom';

class PokemonList extends Component {
  render() {
    const { listPokemonResult } = this.props;
      if (listPokemonResult.length !== 0) {
        return (
          <ul className="pokemon_filtered-list">
            {listPokemonResult.map(item => {
              // for (let i = 0; i < 25; i++) {
              //   console.log( `${item.name}`);
              // }
              return (
                
                <li className="pokemon_filtered-item" key={item.id}>
                  <Link to={`/Pokemon/${item.id}`} className="list__item-link">              
                    <PokemonCard 
                      item={item} 
                      id={item.id} 
                      image={item.sprites.front_default} 
                      name={item.name} 
                      types={item.types} 
                      height={item.height}
                      weight={item.weight}
                      // evolution={item.name[0]}
                      />        
                  </Link>                                  
                </li>
                );
              })}
            </ul>
        )
      } else {
        return (
          <div>                
            <ReactLoading />
            <p className="loading">Wait one or two minutes -not a joke- for results </p>
          </div>
        );
      }
  }
}

export default PokemonList;