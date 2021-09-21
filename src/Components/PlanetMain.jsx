import React from 'react'
import data from '../data.json';

const PlanetMain = ({ planet, setPlanet }) => {
    console.log(planet)
    console.log("planet Main rendered");

    return (
        
        <div className="planet-main">
            <h1>{planet.name.toUpperCase()} Main Component</h1>
        </div>
    )
}

export default PlanetMain;
