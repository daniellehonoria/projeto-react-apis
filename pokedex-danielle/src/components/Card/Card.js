import axios from "axios"
import  {CardContainer} from"./CardStyled"

const Card = (props) => {
  console.log(props)
  const{img, name} = props
  return (
    <CardContainer>
      <img src={img} alt={name}/>
      <h2>{name}</h2>
      </CardContainer>
  )
}

export default Card