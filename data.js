
export const regionPokemon = (pokemones, str) => {
  return pokemones.filter(pokemon=> {
    return pokemon.generation.name==str
  });

}
export const typePokemon = (pokemones, str) => {
  return pokemones.filter(pokemones=> pokemones.type.includes(str));
}

export const sortData =(pokemones, sortBy, sortOrder) => {
  if(sortOrder == 'za'){
  return pokemones.sort((pokemonActual,pokemonSiguiente) => {
    if (pokemonActual[sortBy] < pokemonSiguiente[sortBy]){
      return 1;
    }
    if (pokemonActual[sortBy] > pokemonSiguiente[sortBy]) {
      return -1;
    }
    return 0;
  })
  }
  else (sortOrder == 'az')
    return pokemones.sort((pokemonActual,pokemonSiguiente) => {
      if (pokemonActual[sortBy] > pokemonSiguiente[sortBy]) {
        return 1;
      }
      if (pokemonActual[sortBy] < pokemonSiguiente[sortBy]) {
        return -1;
      }
      return 0;
    })
  }


export const namePokemonFilter = (pokemones, resultPokemon) => {
  const filteredPokemon = pokemones.filter(pokemon => pokemon.name.includes(resultPokemon));
  return filteredPokemon;
  }   

  export const compute = (pokemones, str) => {
    let pokemonesRegion = pokemones.filter(pokemones=> pokemones.type.includes(str));
    let operacion = (pokemonesRegion.length*100)/pokemones.length 
    return Math.round(operacion)
    }
    /*const grass = pokemones.filter(pokemones => pokemones.type == "grass");
    const fire = pokemones.filter(pokemones => pokemones.type == "fire" )
    const water = pokemones.filter(pokemones => pokemones.type == "water" )
    const electric = pokemones.filter(pokemones => pokemones.type == "electric")
    const normal = pokemones.filter(pokemones => pokemones.type == "normal")
    const psychic = pokemones.filter(pokemones => pokemones.type == "psychic")
    const ice = pokemones.filter(pokemones => pokemones.type == "ice")
    const ground = pokemones.filter(pokemones => pokemones.type == "ground")
    const rock = pokemones.filter(pokemones => pokemones.type == "rock")
    const bug = pokemones.filter(pokemones => pokemones.type == "bug")
    const steel = pokemones.filter(pokemones => pokemones.type == "steel")
    const dark = pokemones.filter(pokemones => pokemones.type == "dark")
    const ghost = pokemones.filter(pokemones => pokemones.type == "ghost")
    const poison = pokemones.filter(pokemones => pokemones.type == "posion")
    const fighting = pokemones.filter(pokemones => pokemones.type == "fighting")
    const land = pokemones.filter(pokemones => pokemones.type == "land)*/
      



export const anotherExample = () => {
  return 'OMG';
};

export const showAll = (pokemonInfo) => {
  return pokemonInfo;
};


