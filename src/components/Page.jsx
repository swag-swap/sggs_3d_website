import React from 'react'
import { usePlay } from '../context/Play';
import Swapnil from '../parts/Swapnil';
import Admin from '../parts/Admin';
import Girl from '../parts/Girl';
import Entc from '../parts/Entc';
import Rnxg from '../parts/Rnxg';
import Instru from '../parts/Instru';
import Textile from '../parts/Textile';
import Production from '../parts/Production';
import Cse from '../parts/Cse';
import Boysh from '../parts/Boysh';
import Boysc from '../parts/Boysc';
import Sports from '../parts/Sports';
import Sggsinfo from '../parts/Sggsinfo';


// const info = ["Swapnil", "Admin", "Girl", "Entc", "Rnxg", "Instru", "Textile", "Production", "Cse", "Boysh", "Boysc", "Sports", "Sggsinfo"]

export const Page = () => {

    const { page, setPage, id } = usePlay();
    return (
        <div
            className={`overlay ${page ? "page" : "page--disable"} `}
        >
            <a onClick={(e) => setPage(false)} href="#" className="close" role="button">close</a>
            {/* <button onClick={(e) => setPage(false)}>close</button> */}
            {id === 1 ? <Swapnil /> : id === 2 ? <Admin /> : id === 3 ? <Girl /> : id === 4 ? <Entc /> : id === 5 ? <Rnxg /> : id === 6 ? <Instru /> : id === 7 ? <Textile /> : id === 8 ? <Production /> : id === 9 ? <Cse /> : id === 10 ? <Boysh /> : id === 11 ? <Boysc /> : id === 12 ? <Sports /> : <Sggsinfo />}


        </div>
    )
}
