import { useNavigate } from "react-router-dom";
import { Card } from './styles';





function CardList (props) {

  const navigation = useNavigate()

  
  return (
    <Card onClick={() => navigation(`/details/${props.index + 1}`)}>
      <p>{props.name}</p>
    </Card>
  )
}

export default CardList;