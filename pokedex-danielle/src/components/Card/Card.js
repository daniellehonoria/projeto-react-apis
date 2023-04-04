import { useNavigate } from "react-router-dom"
import { GoToDetailPage } from "../../Routes/coordinator"
import  { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { useLocation } from "react-router-dom"
import  {TypesContainer,Pokeball, PokemonType, CaptureButton, CardContainer, DetailsButton, Pokemon, PokemonId,PokemonName,ButtonDelete} from"./CardStyled"
import {getType} from '../../utils/ReturnPokemonType'
import pokeball from '../../assets/pngwing 2.png'

const Card = (props) => {
  const navigate = useNavigate()
  const context = useContext(GlobalContext);

  const { addToPokedex, removeFromPokedex } = context;
  const location = useLocation();

  const{ pokemon} = props
  
  const onClickCard = (id)=>{
    GoToDetailPage(navigate, id)
  }
  return (
    <CardContainer color={props.cardColor}>
      <div>      
        <PokemonId>#{pokemon.id}</PokemonId>
      <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
      <TypesContainer>
      {pokemon.types?.map((type)=>{
        return (<PokemonType key ={pokemon.id} src={getType(type.type.name)} />)
      })}
        </TypesContainer>
      <DetailsButton onClick={
        ()=>onClickCard(props.pokemon.id)}>
          Detalhes
        </DetailsButton></div>      
      <div>
    <Pokemon src={pokemon.sprites?.other["official-artwork"]["front_default"]}
          alt={pokemon.name}/>
        
        {location.pathname === "/" ? (
          <CaptureButton
            onClick={() => {

              addToPokedex(pokemon);
            }}
          >
            Capturar!
          </CaptureButton>
        ) : (
          <ButtonDelete
            onClick={() => {
    
              removeFromPokedex(pokemon);
            }}
          >
            Excluir!
          </ButtonDelete>
        )}


      </div>
      <Pokeball src={pokeball} alt="pokeball" />


      </CardContainer>
  )
  
}
export default Card