import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

// 1. Obtener un Pokémon por nombre o ID
const getPokemonByNameOrId = async (nombre) => {
    let urlFinal = `${BASE_URL}/pokemon/${nombre.toString().toLowerCase()}`;
    let returnObject = await axios.get(urlFinal);
    
    // Axios ya parsea el JSON automáticamente y lo guarda en la propiedad .data
    return returnObject.data;
};

// 2. Obtener una lista limitada de Pokémon
const getPokemonList = async (limit = 10, offset = 0) => {
    let urlFinal = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;
    let returnObject = await axios.get(urlFinal);
    
    return returnObject.data;
};

// 3. Obtener información de un tipo específico (ej: fire, water)
const getPokemonType = async (type) => {
    let urlFinal = `${BASE_URL}/type/${type.toLowerCase()}`;
    let returnObject = await axios.get(urlFinal);
    
    return returnObject.data;
};

// Exportamos las funciones sueltas, tal como en tu TP anterior
export { getPokemonByNameOrId, getPokemonList, getPokemonType };