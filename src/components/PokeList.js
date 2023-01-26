import React, { useState, useEffect } from 'react';

function PokeList() {

    const [pokemonList, setPokemonList] = useState([]) // State
    const [loaded, setLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState("") // state pour la barre de recherche
    const [filteredPokemonList, setFilteredPokemonList] = useState([]) // state pour la liste filtrée

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(data => { 
          setPokemonList(data.results)
          setLoaded(true)
        })
    }, [])

    useEffect(() => {
        setFilteredPokemonList(pokemonList.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
        }))
    }, [searchValue, pokemonList])
  
    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const pokemonListItems = filteredPokemonList.map((pokemon, index) => {
      // récupérer l'id du pokemon
      const pokemonId = pokemon.url.split("/")[6];
      return(
        <li key={index} className="bg-red-400">
        <img className="pokemon-icon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name}/>
        {pokemon.name}
      </li>
      ) 
    })
  
  
    return (
      <div className="PokeList">
        <input 
            type="text" 
            placeholder="Search for a Pokemon" 
            onChange={handleSearch} 
            value={searchValue}
        />
        {loaded ? pokemonListItems:<img src={require('./Pokeload.gif')} alt="loading" />}
      </div>
    );
  }
  
  export default PokeList
