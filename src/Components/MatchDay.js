import React, { useEffect, useState } from 'react'

export default function MatchDay() {
    const [Match, setDay] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023/1").then(
            (res) =>
                res.json().then((data) => {
                    setDay(data);

                })
        );
    }, []);

    return (
        <div className='pl-20 pr-20'>
            {Match.map(Match => (
                <div className="flex justify-between border border-black border-solid rounded-sm mb-2 h-10 " key={""}>
                    <div>{Match.team1.teamName}</div> vs <div>{Match.team2.teamName}</div>
                </div>
            ))}
        </div>
    )
}
