import { useNavigate } from "react-router-dom"
import { GoToDetailPage } from "../../Routes/coordinator"
import  {TypesContainer, 
  Pokeball, 
  PokemonType, 
  CaptureButton, 
  CardContainer, 
  DetailsButton, 
  Pokemon, 
  PokemonId, 
  PokemonName} from"./CardStyled"
import {getType} from '../../utils/ReturnPokemonType'
import pokeball from '../../assets/pngwing 2.png'

const Card = (props) => {
  const navigate = useNavigate()

  const{ pokemon} = props
  
  const onClickCard = (id)=>{
    GoToDetailPage(navigate, id)
  }
  return (
    <CardContainer color={props.cardColor}>
      <div>      
        <PokemonId>{pokemon.id}</PokemonId>
      <PokemonName>{props.pokemon.name}</PokemonName>
      <TypesContainer>
      {pokemon.types.map((type)=>{
        return <PokemonType key ={pokemon.id} src={getType(type)}/>
      })}
        </TypesContainer>
      <DetailsButton onClick={()=>onClickCard(props.pokemon.id)}>Detalhes</DetailsButton></div>      
      <div>
    <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name}/>
     <CaptureButton>Capturar</CaptureButton>
      </div>
      <Pokeball src={pokeball} alt="pokeball" />


      </CardContainer>
  )
  
}
export default Card