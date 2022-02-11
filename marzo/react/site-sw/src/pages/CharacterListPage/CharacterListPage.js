import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/url";
import { ContainerPrincipal, ContainerCards, Logo } from './styles';
import CardList from "../../components/CardList/CardList";
import logo from '../../assets/logo.png'


function CharacterListPage() {
  const [characterList, setCharacterList] = useState([]);


  const getCharacterList = () => {
    axios.get(BASE_URL)
    .then(({ data }) => {
        setCharacterList(data.results);
    })
    .catch(error => console.log(error))
  };

  useEffect(() => {
    getCharacterList();
  },[]);


  
  return (
    <ContainerPrincipal>
      <Logo src={logo}/>
      <h1>CHARACTER LIST PAGE</h1>
      <ContainerCards>
        {characterList ? <div>
          {characterList.map((character, index) => {
            return <CardList key={index} index={index} name={character.name}/>
          })}
        </div> : <div>Loading....</div>}
      </ContainerCards>
    </ContainerPrincipal>
  );
}

export default CharacterListPage;