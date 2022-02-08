import { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';



function CharacterListPage() {
  const [characterList, setCharacterList] = useState([]);

  const navigation = useNavigate()

  const getCharacterList = () => {
    axios.get('https://swapi.dev/api/people/')
    .then(({ data }) => {
        setCharacterList(data.results);
    })
    .catch(error => console.log(error))
  };

  useEffect(() => {
    getCharacterList();
  },[]);

  return (
    <div>
      <h1>Character List Page</h1>
      <button onCLick={() => navigation('/characterdetail')}>Back</button>
      {characterList.map((person) => {
        return (
          <div>
            <p></p>
          </div>
        )
      })}

    </div>
  );
}

export default CharacterListPage;