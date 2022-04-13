import React from 'react';
import { useState, useEffect } from 'react';

const Character = () => {
    const URL = 'https://rickandmortyapi.com/api/character';

    // Estados
    const [ character, setCharacter ] = useState([]);

    // Consumo de API
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setCharacter(data.results))
            .catch(err => console.log)
    }, [])


    return (
        <div className='container'>
            <div className='charaters'>
                {
                    character.map( item => (
                    <div className='box' key={ item.id }>
                        <img className='image' src={ item.image } alt={ item.name }/>
                        <div className='description'>
                            <h3 className="name">{ item.name }</h3>
                            <p className="especie">{ item.species }</p>
                            <p className="status">{ item.status }</p>
                            <p className="location">{ item.location.name }</p>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    );
};

export default Character;