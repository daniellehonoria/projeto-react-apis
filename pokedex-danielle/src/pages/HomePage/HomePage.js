import React from 'react'
import Header from '../../components/Header/Header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Card from '../../components/Card/Card'
import { HomeStyled } from './HomeStyled'


const HomePage = (props) => {
  const {datasResults} = props

  const renderList = datasResults.map(personagem =>
    <Card
    img={personagem.image}
    name={personagem.name}/>
    )
  const context= useContext(GlobalContext)//conexao com o contexto global do projeto q estão no app 
  console.log("homepage", context.pokemon)
  return (
    <HomeStyled> 
    <Header/>
    <p>HomePage</p>
    <main>

    {renderList}

    </main>


    </HomeStyled>
   
  )
}

export default HomePage