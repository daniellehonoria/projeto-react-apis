import Router from './Routes/Router';
import {BASE_URL} from './constants/url'
import { useState, useEffect } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { GlobalStyled } from './GlobalStyled';

function App() {

    //estado q recebe pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

    //estado q recebe os detalhes dos pokemons
    const [pokemonDetails, setPokemonDetails] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  const addToPokedex = (pokemonAdd) => {
    const itIsInPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonAdd.name)
    if(!itIsInPokedex) {
      const newPokedex = [...pokedex, pokemonAdd]
      setPokedex(newPokedex)
      setIsOpen(true)
    }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
    setPokedex(newPokedex)
    setIsOpen(true)
  }
const context = {
  pokedex,
  setPokedex,
  pokemonDetails,
  setPokemonDetails,
  removeFromPokedex,
  addToPokedex,
  isOpen,
  setIsOpen
}
  return (
    <>
    {/* as infos das variaveis estão acessíveis a todas as pags */}
    <GlobalContext.Provider value={context}>
      <GlobalStyled/>
      <Router/>
    </GlobalContext.Provider>

    </>
  );
}

export default App;
