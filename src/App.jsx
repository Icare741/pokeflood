import './App.css';
import React, { useEffect, useState } from 'react';
import PokeList from './components/PokeList';
import PokeRandom from './components/PokeRandom';


function App() {
  const [pokeRandom, setPokeRandom] = React.useState(null)
  const [pokemonList, setPokemonList] = useState([]) // State

  const [favPokemon, setFavPokemon] = useState([])
  const [showFavPokemon, setShowFavPokemon] = useState(false)

  useEffect(() => {
    // get from localstorage
    const favPokemonJson = JSON.parse(localStorage.getItem('favPokemon')) || [];
    setFavPokemon(favPokemonJson);
  }, []);


  const handlePokeRandomClick = () => {
    setPokeRandom(<PokeRandom />);
  }

  return (
    <>
      <button className="btn btn-primary">PokeList</button>
      <button onClick={(e) => handlePokeRandomClick()} className="btn btn-primary">PokeRandom</button>

      <button  onClick={(e) => setShowFavPokemon(!showFavPokemon)}>Show Favorite Pokemon</button>

      {
        pokeRandom &&
        <div>
          {pokeRandom}
        </div>
      }

      {showFavPokemon && favPokemon &&
        favPokemon.map((pokemon, index) => {
          return (
            <div key={index}>
              <h1> {pokemon.name}</h1>
            </div>
          )
        }
        )
      }

      {favPokemon &&

        <PokeList pokemonList={pokemonList} setPokemonList={setPokemonList} favPokemon={favPokemon} setFavPokemon={setFavPokemon} />
      }

    </>

  )
}





export default App;
