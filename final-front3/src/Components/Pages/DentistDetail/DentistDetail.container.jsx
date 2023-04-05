import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getDentistById } from '../../../Services/DentistService';
import DentistDetail from './DentistDetail';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const DentistDetailContainer = () => {
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams();
  const [dentist, setDentist] = useState({})
  
  useEffect(() => {
    getDentistById(id)
    .then(res => setDentist(res.data))
}, []);

  return (
    <>
      <DentistDetail dentist={dentist}/>
    </>
  )
}

export default DentistDetailContainer;