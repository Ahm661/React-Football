import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {





    return (
        <div className="flex justify-between h-24">
            <div className='pl-5 pt-5'><Link to="/"><img className="h-full" src="images/Bundesliga.png" /></Link></div>
            <div className='pt-20 text-2xl italic'>Matches</div>
            <div className='pr-5 pt-5'><Link to="Matchday"><img className="h-full w-45" src="images/Matches.png" /></Link></div>
        </div>


    )
}
