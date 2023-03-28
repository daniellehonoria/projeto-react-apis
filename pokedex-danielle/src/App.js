import Router from './Routes/Router';
import {BASE_URL} from './constants/url'
import { useState, useEffect } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { GlobalStyled } from './GlobalStyled';

function App() {

    //estado q recebe pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

    //estado q recebe os detalhes dos pokemons
  const [detailPokemon, setDetailPokemon] = useState([])

const context = {
  pokedex,
  setPokedex,
  detailPokemon,
  setDetailPokemon
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
