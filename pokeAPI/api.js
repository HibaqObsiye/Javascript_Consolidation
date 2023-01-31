const fetchPokemon = (name) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/<pokemonname>')
    .then((response) => response.json())
    .then((data) => console.log(data))
}