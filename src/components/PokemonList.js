import React, { Component } from "react";
import PokemonCard from './PokemonCard';
import ReactLoading from 'react-loading';

class PokemonList extends Component {
  render() {
    const { filteredPokemon } = this.props;
      if (filteredPokemon.length !== 0) {
        return (
          <ul className="pokemon_filtered-list">
            {filteredPokemon.map(item => {
              return (
                <li className="pokemon_filtered-item" key={item.id}>
                  <PokemonCard id={item.id} image={item.sprites.front_default} name={item.name} types={item.types} />
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