import React, { useState } from 'react';


const PokeFavShow = () => {
    const [favPokemon, setFavPokemon] = useState(JSON.parse(localStorage.getItem('favPokemon')) || []);

    return (
        <div className="PokeFavShow">
            <h2>Fav Pokemon</h2>
            <ul>
                {favPokemon.map((pokemon, index) => (
                    <li key={index}>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default PokeFavShow;