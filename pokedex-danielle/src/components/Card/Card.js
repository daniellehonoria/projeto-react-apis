import { useNavigate } from "react-router-dom"
import { GoToDetailPage } from "../../Routes/coordinator"
import  {CaptureButton, CardContainer, DetailsButton} from"./CardStyled"

const Card = (props) => {
  const navigate = useNavigate()

  const{ pokemon} = props
  
  const onClickCard = (id)=>{
    GoToDetailPage(navigate, id)
  }
  return (
    <CardContainer>
      <h2>{pokemon.id}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.id}/>
      <h2>{pokemon.name}</h2>
      <DetailsButton onClick={()=>onClickCard(pokemon.id)}>Detalhes</DetailsButton>
     <CaptureButton> <button>Capturar</button>
      </CaptureButton>
      </CardContainer>
  )
}
export default Card