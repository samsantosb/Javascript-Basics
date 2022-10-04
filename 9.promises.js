const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//import axios
const axios = require('axios');
//do a get usinga xios
// axios.get('https://pokeapi.co/api/v2/pokemon/1').then((response) => {

function pokeArrayfetch() {
    const pokemonArray = pokemonIds.map((pokemonId) => {
        return axios.get(`${pokeApi}${pokemonId}`)
    });
    return pokemonArray;
}

async function fetchWithForAwait() {
    for await (const item of pokeArrayfetch()) {
        try {
            const response = item
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
}

//fetchWithForAwait()

async function fetchWithPromiseAll() {
    try {
        const names = await Promise.all(pokemonIds.map(async (pokemonId) => {
            const response = await axios.get(`${pokeApi}${pokemonId}`);

            return response
        }));
        console.log(names);
    } catch (error) {
        console.log(error);
    }

}
//fetchWithPromiseAll()