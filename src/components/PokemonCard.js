import React, { Component, Fragment } from "react";

class PokemonCard extends Component {
  render() {
    const { id, image, name, types, evolution, listPokemonResult } = this.props;
    
      
    
    return (
      <Fragment>
        <div className="pokemon_card">
          <p className="pokemon_id">{id}</p>      
          <div className="pokemon_img-container">
            <img className="pokemon_img" src={image} alt={name} />
          </div> 
          <h2 className="pokemon_name">{name}</h2>
          <div className="pokemon_evolutions">
            <p></p> 
          </div>
          <ul className="pokemon_type">
            {types.map((item, index) => {
              return (
                <li className="pokemon_type-list" key={index}>{item.type.name}</li>
                )
              })}
          </ul>
        </div>               
      </Fragment>
    );
  }
}

export default PokemonCard;

