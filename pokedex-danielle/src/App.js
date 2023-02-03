import Router from './Routes/Router';
import {BASE_URL} from './constants/url'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from './context/GlobalContext';
import { useContext } from 'react';

function App() {

    //estado q recebe pokemons na pokedex
  const [pokedex, setPokedex] = useState([])

    //estado q recebe os detalhes dos pokemons
  const [detailPokemon, setDetailPokemon] = useState([])
  
  //estado q recebe a lista de pokemons
  const [pokemon, setPokemon]=useState([])//pra cada indice do array, recebo um objeto 
  

  useEffect(()=>{ 
    browserPokemon()
  }, [])//faz com q o browserPokemon aconteça sem nenhum impedimento
  //conexao com api -- async ñ permite q a pag quebre enquanto está se comunicando com api
const browserPokemon=async()=>{
  try {
    let i = 1
    const x= []
    while(i < 20){
      const response = await axios.get(`${BASE_URL}/${i}`)    //await faz com que a pag espere as infos do api pra renderizar --- axios informa q há uma conexão
      x.push(response)//tda vez q passar pela response pego infos da pokeapi e por meio da response passo as infos pro array x
      i++
    }
    setPokemon(x)//a var pokemon recebe as infos da var x depois que o laço while terminar(receber os 20 pokemons)
  } catch (error) {
    console.log(error)
    
  }
}
console.log(pokemon)

const context = {
  pokemon,
  setPokemon,
  pokedex,
  setPokedex,
  detailPokemon,
  setDetailPokemon
}


  return (
    <>
    {/* as infos das variaveis estão acessíveis a todas as pags */}
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>

    </>
  );
}

export default App;
