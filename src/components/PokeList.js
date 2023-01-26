import React, { useState, useEffect } from 'react';



function PokeList() {

    const [pokemonList, setPokemonList] = useState([]) // State
    const [loaded, setLoaded] = useState(false)
  
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(data => { 
          setPokemonList(data.results)
          setLoaded(true)
        })
    }, [])
  
    // UseEffect se lance à chaque fois que le state change si [] se lance une seule fois lors du chargement de la page
  
  
    const pokemonListItems = pokemonList.map((pokemon, index) => {
      return(
        <li key={index} className="bg-red-400">
        <img className="pokemon-icon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name}/>
        {pokemon.name}
      </li>
      
      ) 
    })
  
  
    return (
      <div className="PokeList">
         {loaded ? pokemonListItems:<img src={require('./Pokeload.gif')} alt="loading" />}
      </div>
    );
  }
  
  export default PokeList
