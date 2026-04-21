import { getPokemonByNameOrId, getPokemonList, getPokemonType } from './modules/pokeWrapper.js';

const runTests = async () => {
    console.log("Iniciando pruebas de la PokéAPI con Axios...\n");

    try {
        // 1. Obtener un Pokémon por nombre
        console.log("--- 1. Buscando a 'charmander' ---");
        const charmander = await getPokemonByNameOrId('charmander');
        console.log(`Nombre: ${charmander.name}`);
        console.log(`ID: ${charmander.id}`);
        console.log(`Peso: ${charmander.weight}`);
        console.log(`Altura: ${charmander.height}`);
        console.log("-------------------------------------------\n");

        // 2. Obtener una lista limitada de Pokémon
        console.log("--- 2. Obteniendo lista (Límite: 5) ---");
        const listaPokemon = await getPokemonList(5, 0);
        console.log(`Total de Pokémon: ${listaPokemon.count}`);
        console.log("Primeros 5:");
        listaPokemon.results.forEach((p, i) => console.log(` ${i + 1}. ${p.name}`));
        console.log("-------------------------------------------\n");

        // 3. Obtener información de un tipo
        console.log("--- 3. Buscando datos del tipo 'fire' ---");
        const tiPokemon = await getPokemonType('fire');
        console.log(`Tipo: ${tiPokemon.name}`);
        console.log(`Cantidad de Pokémon de fuego: ${tiPokemon.pokemon.length}`);
        console.log("-------------------------------------------\n");

        // 4. Generar un error intencional
        console.log("--- 4. Generando error intencional ---");
        console.log("Buscando al Pokémon 'Batman'...");
        await getPokemonByNameOrId('batman');

    } catch (error) {
        // Axios lanza un error automáticamente si el status HTTP no es 2xx (ej: 404 Not Found)
        console.error("💥 ERROR CAPTURADO CON ÉXITO:");
        if (error.response) {
            console.error(`La API respondió con un error de estado: ${error.response.status}`);
        } else {
            console.error(error.message);
        }
    }
};

runTests();