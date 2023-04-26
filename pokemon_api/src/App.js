import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=870')
      .then(response => {
      console.log(response);
      setPokemon(response.data.results);
    })
    .catch(err => console.log(err));
  }, []);
// This empty array forces useEffect to render ONLY when the component first renders

//JSON useEffect
// const [pokemon, setPokemon] = useState([]);
// useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon/')
//         .then(response => response.json())
//         .then(response => setPokemon(response.results))
// }, []);

return (
    <div className="App">
      <h1>Pokemon API</h1>
      <form action="">
        <button>Fetch Pokemon</button>
      </form>
      <div>
        {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
          return (<div key={index}>{pokemon.name}</div>)
        })}
      </div>
    </div>
  );
}

export default App;
