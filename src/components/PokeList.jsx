import React, { useState, useEffect } from 'react';
import PokeFav from './PokeFav';

function PokeList({ pokemonList, setPokemonList, favPokemon, setFavPokemon }) {

    const [loaded, setLoaded] = useState(false)// state pour loading de pokemon
    const [searchValue, setSearchValue] = useState("") // state pour la barre de recherche
    const [filteredPokemonList, setFilteredPokemonList] = useState([]) // state pour la liste filtrée
    const [selectedPokemonId, setSelectedPokemonId] = useState(null) // state pour le pokemon sélectionné
    const [isBackSprite, setIsBackSprite] = useState(false); // state pour le sprite du pokemon

    const handleBackSprite = (pokemonId) => {
      setSelectedPokemonId(pokemonId);
      setIsBackSprite(!isBackSprite);
  }
  

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
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
        //display pokemon inside a card with the type and the sprite and the name of the pokemon
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <img src={selectedPokemonId === pokemonId ? (isBackSprite ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png` : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`) : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} />
            <PokeFav pokemon={pokemon} favPokemon={favPokemon} setFavPokemon={setFavPokemon} />
            <button onClick={() => handleBackSprite(pokemonId)} className="btn btn-primary">
              { selectedPokemonId === pokemonId ? 'Front' : 'Back'}
            </button>
          </div>
        </div>
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
