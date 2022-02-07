import './styles.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import { goToHome } from '../../router/Coordinator';

import React, { useState } from 'react';

export default function CreatePlaylist() {
  const [namePlaylist, setName] = useState('');
  const history = useHistory();


  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const createPlaylist = () => {
    const body = {
      name: namePlaylist
    };

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
    {
      headers: {
        Authorization: "leticia-felix-marzo"
      }
    })
    .then((response) => {
      console.log(response)
      setName('');
      alert('Playlist criada com sucesso!');
    })
    .catch((error) => {
      console.log(error);
      alert('Não foi possível criar a playlist. Tente novamente.');
    });
    }

  return (
    <div className="box">
      <h1>Criar playlist</h1>
      <div className="formulario">
        <input placeholder="Name" value={namePlaylist} onChange={onChangeName} />
        <button onClick={createPlaylist}>Criar</button>
      </div>
      <button onClick={() => goToHome(history)}>Voltar</button>
    </div>

);
}
