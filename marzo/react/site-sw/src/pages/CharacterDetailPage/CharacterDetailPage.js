import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardDetails from "../../components/CardDetails/CardDetails";
import { BASE_URL } from "../../constants/url";
import { ContainerPrincipal, BotaoVoltar, Logo } from './styles';
import logo from '../../assets/logo.png'




function CharacterDetailPage() {
  const [details, setDetails] = useState([]);
  const [planet, setPlanet] = useState([])

  const params = useParams();
  const navigation = useNavigate()
  

  const getCharacterDetails = () => {
    axios.get(`${BASE_URL}${params.index}/`)
    .then((response) => {
        setDetails(response.data);
        
    })
    .catch(error => console.log(error))
  };

  const getPlanetDetails = () => {
    axios.get(`${details.homeworld}`)
    .then((response) => {
        setPlanet(response.data);
        
    })
    .catch(error => console.log(error))
  };
  
  useEffect(() => {
    getCharacterDetails();
    getPlanetDetails();
  },[]);

 console.log(planet)
  return (
    <ContainerPrincipal>
      <Logo src={logo}/>
      <h1>CHARACTER DETAIL PAGE</h1>
      {details ?
          <CardDetails name={details.name} gender={details.gender} birthyear={details.birth_year} planet={planet.name}/> : 
          <div><p>Loading...</p></div>}
      <BotaoVoltar onClick={() => navigation('/')}>Back to list</BotaoVoltar>
    </ContainerPrincipal>
  );
}

export default CharacterDetailPage;