import React from 'react';
import Card from '../../Common/Card/Card';

const Dentists = ({state}) => {
    return (
        <div>
            <h1>Dentistas</h1>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
            {
                state.users.map(e => (
                    <Card key={e.id} name={e.name} username={e.username} id={e.id}></Card>
                ))
            }
            </div>
            
        </div>
    );
}

export default Dentists;

