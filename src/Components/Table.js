import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

            {liga.map(liga => (
                <div className="flex justify-between border border-black border-solid rounded-sm mb-1" key={liga.teamInfoId}>
                    <div className="flex">
                        <div>
                            <img className="h-5 mr-10" src={liga.teamIconUrl} />
                        </div>
                        <div>{liga.teamName}</div>
                    </div>
                    <div>{liga.points}P</div>
                    
                </div>
            ))}
        </div>

    );
};

export default Table;