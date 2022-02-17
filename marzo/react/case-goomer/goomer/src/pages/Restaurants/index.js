import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';





export const Restaurants = () => {
  const [details, setDetails] = useState([])

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://challange.goomer.com.br/restaurants/${id}/menu`)
    .then((response) => {
      setDetails(response.data);
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }, []);


  return (
    <div>
      {details.map((item) => {
        return <p>{item.name}</p>
      })}
    
    </div>
  )
}

