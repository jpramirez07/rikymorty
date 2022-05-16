import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {  

    const [ location, setlocation ] = useState({})
    const [ searchId, setsearchId ] = useState("")

    useEffect( () => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
          .then(res => setlocation(res.data))
    }, [])

    const searchtype = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
            .then(res => setlocation(res.data))
    }

    if (searchId > 126){
        alert("Hay 126 planetas")
    }

    return (
        <div>
            <h2>{location.name}</h2>
            <div className='infoplanet'>
                <p><b>Type: </b>{location.type}</p> <p><b>Dimension: </b> {location.dimension}</p> <p><b>Residents: </b> {location.residents?.length}</p>
            </div>
            <div>
                <input type="text" onChange={e => setsearchId(e.target.value)} value={searchId} placeholder={"type a location id"}/>
                <button onClick={searchtype}>search</button>
            </div>
            <ul className='resident-list'>
                {location.residents?.map(residents => (
                    <ResidentInfo url={residents} key={residents}/>
                ))}
            </ul>
        </div>
    );
};

export default Location;