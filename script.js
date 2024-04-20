const pokemonContainer = document.querySelector(".pokemon-container");
const pokemonCount = 10;
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  elelctric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  posion: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const fetchPokemons = async () => {
  for (let i = 1; i < pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  updatePokemonUI(data);
};

fetchPokemons();
