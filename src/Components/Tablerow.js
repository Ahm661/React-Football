import React from 'react'

export default function Tablerow({ liga }) {
    return (
        <div>
            <div className="flex justify-between border border-black border-solid rounded-sm mb-1" key={liga.teamInfoId}>
                <div className="flex">
                    <div>
                        <img className="h-5 mr-10" src={liga.teamIconUrl} />
                    </div>
                    <div>{liga.teamName}</div>
                </div>
                <div>{liga.points}P</div>

            </div>
        </div>
    )
}





