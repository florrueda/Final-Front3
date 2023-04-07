import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { getDentistById } from '../../../Services/DentistService';
import DentistDetail from './DentistDetail';
import { GlobalContext } from '../../../Context/GlobalContext';

const DentistDetailContainer = () => {
  
  const {id} = useParams();
  const {state, dispatch} = useContext(GlobalContext)
  
  useEffect(() => {
    
    const dentist = getDentistById(id);
            dentist.then(res => {dispatch({type: "GET_USER", payload: res.data})})
            dentist.catch(err => console.log(err))
}, []);

  return (
    <>
      <DentistDetail state={state}/>
    </>
  )
}

export default DentistDetailContainer;