import React, { Component, Fragment } from 'react';
import './App.scss';
import { fetchPokemon } from './services/PokemonService';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPokemon: '',
      results: [],
    }

    this.getPokemon = this.getPokemon.bind(this);
    this.filterPokemonList = this.filterPokemonList.bind(this);
    this.getFilteredPokemon = this.getFilteredPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon()
  }

  getPokemon() {
    fetchPokemon()
    .then(data => {
      const promiseList = data.results.map(item => fetch(item.url));
      Promise.all(promiseList)
      .then(responses => {
            const res = responses.map(response => response.json())
            Promise.all(res)
              .then(pokemon => {
                this.setState({
                  results: pokemon
                })
              })
          })
      })
  }

  filterPokemonList(event) {
    const query = event.currentTarget.value;
    this.setState({
      searchPokemon: query
    })
  }

  getFilteredPokemon() {
    const { results, searchPokemon } = this.state;
    return results.filter(item => item.name.toUpperCase().includes(searchPokemon.toUpperCase()));
  }

  render() {
    return (
      <Fragment>
        <div className="app">
          <header className="app_header">
            <h1 className="app_header-title">Pokedex</h1>
            <Filter filterPokemonList={this.filterPokemonList} />
          </header>
          <main className="app_main">
            <div className="app_main-container">
              <PokemonList filteredPokemon={this.getFilteredPokemon()} />
            </div>          
          </main>
          <footer className="app_footer">
            <p className="app_footer-text"></p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default App;
