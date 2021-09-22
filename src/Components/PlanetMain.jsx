import React from 'react'
import data from '../data.json';
const PlanetMain = ({ planet, index, setPlanet }) => {

    return (
        
        <div className="planet-main">
            <h1>{planet.name.toUpperCase()} Main Component</h1>
            <img src={data[0].images.planet} alt={planet.name} />
            <h4><a href={planet.structure.source}>{planet.structure.source}</a></h4>
            <p>{planet.overview.content}</p>
        </div>
    )
}

export default PlanetMain;
