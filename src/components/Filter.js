import React, { Component, Fragment } from "react";

class Filter extends Component {
  render() {
    const { filterPokemonList } = this.props;
    return (
      <Fragment>
        <div className="input_container">
          <label className="app_field-label" htmlFor="search you Pokemon"></label>
          <input className="app_field-input" type="text" placeholder="Look for your favorite Pokemon" onKeyUp={this.props.onkeyUpAction}/>
        </div>
      </Fragment>
    );
  }
}

export default Filter;