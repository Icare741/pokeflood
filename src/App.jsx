import './App.css';
import React, { useEffect, useState } from 'react';
import PokeList from './components/PokeList';
import PokeRandom from './components/PokeRandom';


function App() {
  const [pokeRandom, setPokeRandom] = React.useState(null)
  const [pokemonList, setPokemonList] = useState([]) // State

  const [favPokemon, setFavPokemon] = useState([])
  const [showFavPokemon, setShowFavPokemon] = useState(false)
  const [displayPokeList, setDisplayPokeList] = useState(true);
  const [isButtonSfav, setIsButtonSfav] = useState(false);
  
  const handleClick = () => {
    setShowFavPokemon(!showFavPokemon);
    setIsButtonSfav(!isButtonSfav);
  };

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
      <div className="button-container">
        <button onClick={(e) => handlePokeRandomClick()} className="btn btn-primary">PokeRandom</button>
        <button className="btn btn-primary" onClick={handleClick}>{isButtonSfav ? 'PokeList' : 'Show Favorite Pokemon'}</button>
      </div>


      {
        pokeRandom &&
        <div>
          {pokeRandom}
        </div>
      }

      {showFavPokemon && favPokemon &&
        favPokemon.map((pokemon, index) => {
          return (
            console.log(index),
            <div key={index}>
              <h1> {pokemon.name}</h1>
            </div>
          )
        }
        )
      }
      
      
      {!showFavPokemon && <PokeList pokemonList={pokemonList} setPokemonList={setPokemonList} favPokemon={favPokemon} setFavPokemon={setFavPokemon} />}
      

    </>

  )
}





export default App;
