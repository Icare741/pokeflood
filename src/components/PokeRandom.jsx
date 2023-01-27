import React, { useState, useEffect } from 'react';

const PokeRandom = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
                setLoaded(true);
            })
    }, []);

    const randomPokemon = Math.floor(Math.random() * pokemonList.length);
    const pokemon = pokemonList[randomPokemon];
    const pokemonName = pokemon ? pokemon.name : '';
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon + 1}.png`;

    return (
        <div className="RandomPokemon">
            {loaded ? (
                <>
                    <img src={pokemonImage} alt={pokemonName} />
                    <p>{pokemonName}</p>
                </>
            ) : (
                <img src={require('./Pokeload.gif')} alt="loading" />
            )}
        </div>
    );
}

export default PokeRandom;


