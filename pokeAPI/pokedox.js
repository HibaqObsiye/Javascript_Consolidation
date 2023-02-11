class Pokedox{
    constructor(){
        this.pokedox = []
    }

    catch(name){
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => this.pokedox.push(data.name))
    }
    all(){
        return this.pokedox
    }
}
module.exports = Pokedox;