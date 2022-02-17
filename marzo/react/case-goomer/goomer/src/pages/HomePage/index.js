import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../../utils/urls';
import { useNavigate } from 'react-router-dom';
import CardRestaurant from '../../components/CardRestaurant'


export const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    axios.get(API_URL)
    .then((response) => {
      setRestaurants(response.data);
    })
    .catch(error => console.log(error))
  }, []);

    return (
    <div> 
      <h1>Bem-vindo a Lista Rango</h1>
      <form>
        <input placeholder='Buscar estabelecimento'></input>
        <button>Search</button>
      </form>
      <div>
        {restaurants.map((rest) => {
          return <CardRestaurant key={rest.id} id={rest.id} name={rest.name} image={rest.image} endereco={rest.address}/>
        })}
      </div>
    </div>
  )
}

