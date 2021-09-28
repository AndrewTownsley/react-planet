import React from 'react'
const PlanetMain = ({ planet, index, setPlanet }) => {

    return (
        
        <div className="planet-main">
            <div className="planet-main-grid">
                <div className="planet-img-container">
                    <img src={ require(`../assets/planet-${planet.name.toLowerCase()}.svg`).default } alt={planet.name} />
                </div>
                <div className="planet-main-overview">
                    <h1>{planet.name.toUpperCase()}</h1>
                    <p>{planet.overview.content}</p>
                    <h4><a href={planet.structure.source}>Source: <span>Wikipedia</span></a></h4>
                    <div className="planet-img-btn-container">
                        <button className="planet-img-btn">
                            01
                            <span className="planet-img-span">OVERVIEW</span>
                        </button>
                        <button className="planet-img-btn">
                            02
                            <span className="planet-img-span">INTERNAL STRUCTURE</span>
                        </button>
                        <button className="planet-img-btn">
                            03
                            <span className="planet-img-span">SURFACE GEOLOGY</span>
                        </button>
                    </div>
            </div>
            </div>
            <div className="planet-data-display">
                <div className="planet-data-card">
                    <h4>ROTATION TIME</h4>
                    <h2>DAYS</h2>
                </div>
                <div className="planet-data-card">
                    <h4>REVOLUTION TIME</h4>
                    <h2>DAYS</h2>
                </div>
                <div className="planet-data-card">
                    <h4>RADIUS</h4>
                    <h2>KM</h2>
                </div>
                <div className="planet-data-card">
                    <h4>AVERAGE TEMP.</h4>
                    <h2>C</h2>
                </div>
            </div>
        </div>
    )
}

export default PlanetMain;
