import React, {useEffect, useContext} from 'react';
import Dentists from './Dentists';
import { GlobalContext } from '../../../Context/GlobalContext';
import {getDentists} from '../../../Services/DentistService'

const DentistsContainer = () => {

    const {state, dispatch} = useContext(GlobalContext)

    useEffect(() => {
        const dentists = getDentists();
            dentists.then(res => {dispatch({type: "GET_USERS", payload: res.data})})
            dentists.catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Dentists users={state.users} dispatch={dispatch} favs={state.favs}/>
        </div>
    );
}

export default DentistsContainer;
