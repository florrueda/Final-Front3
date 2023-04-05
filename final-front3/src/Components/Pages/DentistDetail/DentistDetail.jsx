import React from 'react';

const DentistDetail = ({dentist}) => {
    return (
        <div>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <h1>Detalle dentista {dentist.id} </h1>
            <div style={{border: '2px solid white'}}>
                    <h2>Nombre: {dentist.name}</h2>
                    <h2>Email: {dentist.email}</h2>
                    <p>Telefono: {dentist.phone}</p>
                    <p>Pagina web: {dentist.website}</p>
                </div>
        </div>
    );
}

export default DentistDetail;
