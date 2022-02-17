import { ContainerCard, Imagem, TituloRestaurante } from './styles';
import { useNavigate } from 'react-router-dom';







export default function Card({name, id, image, endereco}) {

  const navigation = useNavigate();

  return (
    <ContainerCard onClick={() => navigation(`/restaurants/${id}`)}>
      <Imagem src={image} />
      <div>
        <TituloRestaurante>{name}</TituloRestaurante>
        <p>{endereco}</p>
      </div>
    </ContainerCard>
  )
}
