import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Card from '../../components/Card/Card'
import { HomeStyled } from './HomeStyled'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'


const HomePage = () => {
  const [pokemons, setPokemons]=useState([])//pra cada indice do array, recebo um objeto 
  const context= useContext(GlobalContext)//conexao com o contexto global do projeto q estão no app 
  const {pokedex} = context;

useEffect(() => {
  fetchPokemons();
}, []);

//axios que renderiza lista de pokemons
const fetchPokemons = () => {
  axios
    .get(BASE_URL)
    .then((resp) => {
      setPokemons(resp.data.results);
    })
    .catch((error) => {
      console.log("Erro ao buscar informaçöes de pokemon");
      console.log(error.response);
    })
}
const filteredpokemons = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );        

  return (
    <HomeStyled> 
    <Header/>
    <p>HomePage</p>

    <main>
        {filteredpokemons().map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              
            />
          );
        })}


    </main>


    </HomeStyled>
   
  )
}

export default HomePage