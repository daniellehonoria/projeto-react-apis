import Router from './Routes/Router';
import {BASE_URL} from './constants/url'
import { useState, useEffect } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { GlobalStyled } from './GlobalStyled';
import axios from "axios";

function App() {

    //estado q recebe pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

    //estado q recebe os detalhes dos pokemons
    const [pokemonDetails, setPokemonDetails] = useState([])
    const [pokemonList, setPokemonList] = useState([]);

  const [message, setMessage] = useState(false);
  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = () => {
    axios
      .get(BASE_URL)
      .then((resp) => {
        setPokemonList(resp.data.results);
      })
      .catch((error) => {
        console.log("Erro ao buscar informaçöes de pokemon");
        console.log(error.response);
      });
  };

  const addToPokedex = (pokemonAdd) => {
    const itIsInPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonAdd.name)
    if(!itIsInPokedex) {
      const newPokedex = [...pokedex, pokemonAdd]
      setPokedex(newPokedex)
    }
    setMessage(true)
  }

  const removeFromPokedex = (pokemonRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonRemove.name)
    setPokedex(newPokedex)
    setMessage(true)
  }
const context = {
  pokedex,
  setPokedex,
  pokemonDetails,
  setPokemonDetails,
  removeFromPokedex,
  addToPokedex,
  setMessage,
 message,
 pokemonList,
 setPokemonList
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
