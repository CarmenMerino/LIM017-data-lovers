/* eslint-disable no-undef */
import {
  regionPokemon,
  typePokemon,
  sortData,
  namePokemonFilter,
  compute,
} from "./data.js";
import pokemonInfo from "./data/pokemon/pokemon.js";


//console.log(pokemonInfo,showAll(pokemonInfo));

const listaPokemones = pokemonInfo.pokemon;
function addPokemones(pokemones, contenedor) {
  for (let i = 0; i < pokemones.length; i = i + 1) {
    let pokemon = pokemones[i];
    let tagImgPokemon = pokemon.img;
    let namePokemon = pokemon.name;
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon-div";
    let imgPokemon = document.createElement("img");
    imgPokemon.src = tagImgPokemon;
    imgPokemon.className = "pokemon-img";
    let nodoNombre = document.createElement("span");
    nodoNombre.textContent = namePokemon;
    nodoNombre.className = "nombre-item";
    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(nodoNombre);
    contenedor.appendChild(divPokemon);
  }
}
//HTML
const logoPokemon = document.getElementById("logoPokemon");
const container = document.getElementById("pokemones");
const select = document.getElementById("selection");
const select1 = document.getElementById("selection1");
const select2 = document.getElementById("selection2");
const inputSearch = document.getElementById("search");
const btnPercent = document.getElementById("porcentaje");
const divPercent = document.getElementById("chart_div")

addPokemones(listaPokemones, container);

function refresh() {
  container.innerHTML = "";
  addPokemones(listaPokemones, container);
}
logoPokemon.addEventListener("click", refresh);


btnPercent.addEventListener("click", porcentaje);
function porcentaje(){
  container.innerHTML = "";
  drawChart()
  container.appendChild(divPercent)
}


select.addEventListener("change", (e) => {
  const type = typePokemon(listaPokemones, e.target.value);
  container.innerHTML = "";
  addPokemones(type, container);
});

select1.addEventListener("change", (e) => {
  let region = regionPokemon(listaPokemones, e.target.value);
  container.innerHTML = "";
  addPokemones(region, container);
});

select2.addEventListener("change", (e) => {
  let order = sortData(listaPokemones, "name", e.target.value);
  container.innerHTML = "";
  addPokemones(order, container);
});

inputSearch.addEventListener("keyup", (e) => {
  let searchPokemon = namePokemonFilter(listaPokemones, e.target.value);
  container.innerHTML = "";
  addPokemones(searchPokemon, container);
});

let listaTipos = new Set();
for (let i = 0; i < listaPokemones.length; i = i + 1) {
  let pokemonType = listaPokemones[i].type;
  for (let j = 0; j < pokemonType.length; j = j + 1) {
    let tipo = pokemonType[j];
    listaTipos.add(tipo);
  }
}

google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Tipo");
  data.addColumn("number", "Pocentaje");
  listaTipos.forEach(tipo => data.addRow([tipo, compute(listaPokemones, tipo)]))
  var options = {
    title: "Porcentaje de Pokemones por tipo",
    width: 500,
    height: 400,
    chartArea: {
      width: 600
    }
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(divPercent);
  chart.draw(data, options);
}