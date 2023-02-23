import  {CardContainer} from"./CardStyled"

const Card = (props) => {
  const{ pokemon} = props
  return (
    <CardContainer>
      <h2>{pokemon.id}</h2>
      <img src={pokemon.img} alt={pokemon.name}/>
      <h2>{pokemon.name}</h2>
      </CardContainer>
  )
}

export default Card