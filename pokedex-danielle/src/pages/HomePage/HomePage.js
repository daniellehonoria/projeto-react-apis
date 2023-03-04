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
  //const [pokedex, setPokedex]=useState([])
  const context= useContext(GlobalContext)//conexao com o contexto global do projeto q estão no app 

useEffect(()=>{
  fetchPokemons()
},[])
const fetchPokemons = async()=>{
  try {
    let i = 1
    const rendPokemons = [...new Set(pokemons)]
    while(i < 20){
      const response = await axios.get(`${BASE_URL}/${i}`) 
      rendPokemons.push(response.data)
      i++
    }
    setPokemons(rendPokemons)
//a var pokemon recebe as infos da var x depois que o laço while terminar(receber os 20 pokemons)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <HomeStyled> 


    <main>
      {pokemons.map((pokemon)=>{
        return <Card key={pokemon.id} pokemon={pokemon}/>
      })}



    </main>


    </HomeStyled>
   
  )
}

export default HomePage