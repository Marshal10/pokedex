const pokemonContainer = document.querySelector(".pokemon-container");
const pokemonCount = 151;
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
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

const updatePokemonUI = (pokemon) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("pokemon-card");
  const pokemonId=pokemon.id.toString().padStart(3,'0')
  const pokemonName=pokemon.name[0].toUpperCase() + pokemon.name.substring(1)
  const types=pokemon.types.map(type=>type.type.name)
  const mainType=types[0]
  const typesStr=types.toString()
  cardEl.style.backgroundColor=colors[mainType]

  const pokemonHtml = `
    <div class="image-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Bulbasaur" id="pokemon-image">
    </div>
    <div class="stats-container">
        <div class="number" id="number">#${pokemonId}</div>
        <div class="name" id="name">${pokemonName}</div>
        <small class="type">Type: <span id="type">${typesStr}</span></small>
    </div>
    `;

    cardEl.innerHTML=pokemonHtml
    pokemonContainer.appendChild(cardEl)
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
