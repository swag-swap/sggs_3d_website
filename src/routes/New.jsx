import React from 'react'
import { usePlay } from '../components/Play';


export const New = () => {

    const { page ,setPage} = usePlay(); 
    return (
        <div
            className={`overlay ${page ? "page" : "page--disable"} `}
        >
            <button onClick={(e) => setPage(false)}>close</button>
            <h1>Swapnil</h1>
        </div>
    )
}
