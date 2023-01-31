const { response } = require("express");

const fetchPokemon = (name) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {let animal = {name: data.name, id: data.name, height: data.height, weight: data.weight}; return animal })
    .then((pokemon) => console.log(pokemon))
}

module.exports = fetchPokemon