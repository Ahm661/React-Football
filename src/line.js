import React from 'react';

const Line = ({ position, team, points, image }) => {
    return (
        <div className="line">
            <div className="linefirst">
                <div>{position}.</div>
                <div>
                    <img className="fimg" src={image} alt={team} />
                </div>
                <div>{team}</div>
            </div>
            <div>{points}P</div>
        </div>
    );
};

export default Line;