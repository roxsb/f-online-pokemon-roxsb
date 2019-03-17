import React, { Component, Fragment } from 'react';
import { fetchPokemon } from './services/PokemonService';
import PokemonList from './components/PokemonList';
import Filter from './components/Filter';
import PokemonDetails from './components/PokemonDetails';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      results: [],
      searchPokemon: ''
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
      const listPokemonResult = this.getFilteredPokemon();
      const {results} = this.state;

    return (      
        <div className="app">
          <header className="app_header">
            <h1 className="app_header-title">Pokédex</h1>            
            <Switch>
              <Route exact path="/" render = {()=><Filter onkeyUpAction = {this.filterPokemonList} />} />
            </Switch>     
          </header>
          <main className="app_main">            
            <Switch>
              <Route exact path="/" render = {()=>  
                <PokemonList listPokemonResult = {listPokemonResult} />} />            
              <Route path="/pokemon/:id" render = {props=>
                <PokemonDetails match={props.match}listPokemonResult = {results} id= {2}/>} />  
            </Switch>                     
          </main>
          <footer className="app_footer">
            <p className="app_footer-text">Adalab-fonline-2019</p>
          </footer>
        </div>     
    );
  }
}

export default App;
