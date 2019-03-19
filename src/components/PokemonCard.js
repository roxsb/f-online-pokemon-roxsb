import React, { Component, Fragment } from "react";

class PokemonCard extends Component {
  render() {
    const { id, image, name, types } = this.props;
    
    return (
      <Fragment>
        <div className="pokemon_card">
          <div className="pokemon_card-firstcontainer">                
            <div className="pokemon_img-container">
              <img className="pokemon_img" src={image} alt={name} />
            </div>
          </div>
          <div className="style-pokeball">
            <p className="pokemon_id">{id}</p>
          </div>           
          <div className="pokemon_card-secondcontainer">            
            <h2 className="pokemon_name">{name}</h2>          
            <ul className="pokemon_type">
              {types.map((item, index) => {
                return (
                  <li className="pokemon_type-list" key={index}>{item.type.name}</li>
                  )
                })}
            </ul>
            <div className="pokemon_evolutions">
              <p>Ev.::
              {name}</p> 
            </div>
          </div>
        </div>               
      </Fragment>
    );
  }
}

export default PokemonCard;

