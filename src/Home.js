import React, { Component } from 'react';

export default class Home extends Component {

  constructor() {
    super();
    this.state = { pokemon: {}, id: '1' };
  }

  getPokemonById(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(pokemon => {
        this.setState({ pokemon, id });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    // HINT.... When is this called?...
    this.getPokemonById(1);
  }

  render() {

    return (
      <div>
        <h1>{this.state.pokemon.name}</h1>
        <input type="text" defaultValue={this.state.id} onChange={e => this.getPokemonById(e.target.value)} />
      </div>
    )
  }

}
