import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [ resident, setresident ] = useState({})
    
    useEffect(() => {
        axios.get(url)
            .then(res => setresident(res.data))
    }, [url])

    const changestatus = () => {
        if (resident.status === "Alive"){
            return "green"
        }else if (resident.status === "Dead"){
            return "red"
        }else{
            return "grey"
        }
    }

    return (
        <li>
            <div className='cards'>
                <h3>{resident.name}</h3>
                <img src={resident.image}alt="" />
                <div className='infostatus'>
                    <div className='iconstatus' style={{background: changestatus()}}></div> <p>{resident.status}</p>
                </div>
                <p><b>Breed: </b>{resident.species}</p>
                <p><b>Origin: </b>{resident.origin?.name}</p>
                <p><b>Episodes where appear: </b>{resident.episode?.length}</p>
            </div>
        </li>
    );
};

export default ResidentInfo;

// <li key={residents}> {residents} </li>