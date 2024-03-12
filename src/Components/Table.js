import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tablerow from './Tablerow';

const Table = () => {


    const [liga, setLiga] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023").then(
            (res) =>
                res.json().then((data) => {
                    setLiga(data);

                })
        );
    }, []);

    return (


        <div className="w-full ">

            {liga.map((liga,index) => (
                <Tablerow key={index} liga={liga} />
            ))}
        </div>

    );
};

export default Table;