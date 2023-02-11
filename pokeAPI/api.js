const { response } = require("express");

const fetchPokemon = (name) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((pokemon)=> {const types = pokemon.types.map(type => type.type.name); console.log(pokemon.name, pokemon.id, pokemon.height, pokemon.weight, types)})
    // .then((data) => console.log(data) )
}

module.exports = fetchPokemon