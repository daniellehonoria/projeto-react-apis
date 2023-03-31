import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Card from '../../components/Card/Card'
import { HomeStyled, TitlePage, ListPokemons} from './HomeStyled'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import {getColors} from "../../utils/ReturnCardColor"
import {ModalCapture} from "../../components/Modal/Modal"

const HomePage = () => {
  const [pokemons, setPokemons]=useState([])//pra cada indice do array, recebo um objeto 
  //const [pokedex, setPokedex]=useState([])
  const context= useContext(GlobalContext)//conexao com o contexto global do projeto q estão no app 
  const { pokemonList, pokedex, message, setMessage } = context;

// const addToPokedex =(pokedexToAdd)=>{
//   const newPokedex=[...pokedex]
//   const pokedexSearch = newPokedex.find((pokemonInPokedex)=>pokemonInPokedex,id)
// }
useEffect(()=>{
  fetchPokemons()
},[])
const fetchPokemons = async()=>{
  try {
    let i = 1
    const rendPokemons = [...new Set(pokemons)]
    while(i < 21){
      const response = await axios.get(`${BASE_URL}/${i}`) //await faz com que a pag espere as infos do api pra renderizar --- axios informa q há uma conexão
      rendPokemons.push(response.data)//tda vez q passar pela response pego infos da pokeapi e por meio da response passo as infos pro array x
      i++
    }
    setPokemons(rendPokemons)
//a var pokemon recebe as infos da var x depois que o laço while terminar(receber os 20 pokemons)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>

    
      <HomeStyled> 

    <TitlePage>Todos os pokémons</TitlePage>     
     <ModalCapture onClose={() => setMessage(false)} show={message}/>


    <ListPokemons>      
      {pokemons.map((pokemon)=>{
        return <Card 
        cardColor={getColors(pokemon.name)}
        key={pokemon.id} pokemon={pokemon}/>
      })}</ListPokemons>
  
  

   </HomeStyled>
   
    </>
  
  )
}

export default HomePage