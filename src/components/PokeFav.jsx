import React, { useEffect, useState } from 'react';


const PokeFav = ({ pokemon,favPokemon,setFavPokemon }) => {
    const [isFav, setIsFav] = useState(false);
    const pokemonId = pokemon.url.split("/")[6];

    useEffect(() => {
        const isFavCheck = favPokemon.some(poke => poke.name === pokemon.name);
        setIsFav(isFavCheck);

    }, [favPokemon])



    const handleFavClick = () => {
        const isFav = favPokemon.some(poke => poke.name === pokemon.name);

        if (isFav) {
            const newFavPokemon = favPokemon.filter(poke => poke.name !== pokemon.name);
            localStorage.setItem('favPokemon', JSON.stringify(newFavPokemon));
            setIsFav(false);
            setFavPokemon(newFavPokemon);
        } else {
            const newFavPokemon = [...favPokemon, pokemon];
            localStorage.setItem('favPokemon', JSON.stringify(newFavPokemon));
            setIsFav(true);
            setFavPokemon(newFavPokemon);
        }
    }

    return (
        <button onClick={handleFavClick} className="btn btn-primary">
            {isFav ? 'Remove from fav' : 'Add to fav'}
            <img className="pokemon-icon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name}/>
        </button>
    )
}

export default PokeFav;
