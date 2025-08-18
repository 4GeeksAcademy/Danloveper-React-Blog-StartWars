import React, { useEffect, useState } from 'react'
import CardInfo from '../components/CardInfo'
import { useParams } from 'react-router-dom'
import { baseUrl } from './Home';

const Details = () => {
  const params = useParams();
  const [info, setInfo] = useState({});

  const getDetailsCard = async () => {
    try {
      const response = await fetch(baseUrl + params.feature + '/' + params.theId)
      if (!response.ok) {
        throw Error('Problema con la solicitud: ', response.status);
      }
      const data = await response.json();
      setInfo({...data.result})
    } catch (e) {
      console.error('Problema al obtener detalles de la carta: ', e)
    }
  }

  useEffect(() => {
    getDetailsCard();
  }, [])


  return (
    <CardInfo result={info} />
  )
}

export default Details