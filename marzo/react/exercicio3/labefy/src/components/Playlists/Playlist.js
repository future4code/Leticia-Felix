import './styles.css';
import CardPlaylist from '../CardPlaylist/CardPlaylist';
import axios from "axios";
import { useHistory } from 'react-router';
import { goToCreate } from '../../router/Coordinator';
import React, { useEffect, useState } from 'react';

export default function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const history = useHistory();



  useEffect(() => {
    getPlaylists();
  }, []);

   const getPlaylists = () => {
    axios.
    get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
    {
      headers: {
        Authorization: 'leticia-felix-marzo'
      }
    })
    .then((response) => {
      setPlaylists(response.data.result.list);
    })
    .catch((error) => {
      console.log(error)
    });
    }

  

  return (
    <div className="box">
      <div className="content">
        <h1>Lista de Playlists</h1>
        {playlists ? <div>{playlists.map((item) => {
          return (
            <CardPlaylist key={item.id} playlists={item}/>)
        })}</div> : <div>Loading...</div>}
        
      </div>
      <button className="pagebutton" onClick={() => goToCreate(history)}>Criar playlist</button>
    </div>
      
    );
}
