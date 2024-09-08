const typeColor = {
  bug: "#26de81",
  dragon: "#ffea71",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;
  const finalURL = url + id;

  // Fetch the Pokémon data from the API
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data); // Generate and display the card
    })
    .catch((error) => console.error("Error fetching data:", error));
};

// Function to display Pokémon data
const generateCard = (data) => {
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default || data.sprites.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

  // Set theme color
  const themeColor = typeColor[data.types[0].type.name];
  card.innerHTML = `
    <p class="hp">
      <span>${hp}</span>
    </p>
    <img src="${imgSrc}" alt="${pokeName}">
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types"></div>
    <div class="stats">
      <div>
        <h3>${statAttack}</h3>
        <p>Attack</p>
      </div>
      <div>
        <h3>${statDefense}</h3>
        <p>Defense</p>
      </div>
      <div>
        <h3>${statSpeed}</h3>
        <p>Speed</p>
      </div>
    </div>
  `;

  appendTypes(data.types);
  styleCard(themeColor);
};

// Function to append Pokémon types
let appendTypes = (types) => {
  const typesContainer = document.querySelector(".types");
  typesContainer.innerHTML = ""; // Clear previous types
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    span.style.backgroundColor = typeColor[item.type.name]; // Apply color to type span
    typesContainer.appendChild(span); // Append span to the container
  });
};

// Function to style the card with gradient background
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
