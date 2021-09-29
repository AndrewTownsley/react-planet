import React, { useState } from 'react';


const PlanetMain = ({ planet, index, setPlanet }) => {
    const [activeClass, setActiveClass] = useState(false); 
    const toggleBtnColor = () => {
        setActiveClass(false)
        setActiveClass(activeClass ? `planet-img-btn ${planet.name}.color` : 'planet-img-btn')
    }

    return (
        
        <div className="planet-main">
            <div className="planet-main-grid">
                <div className="planet-img-container">
                    <img src={ require(`../assets/planet-${planet.name.toLowerCase()}.svg`).default } alt={planet.name} />
                </div>
                <div className="planet-main-overview">
                    <h1>{planet.name.toUpperCase()}</h1>
                    <p>{planet.overview.content}</p>
                    <h4 className="source-link">Source: <a href={planet.structure.source}><span>Wikipedia</span></a></h4>
                    <div className="planet-img-btn-container">
                        <button onClick={()=>setActiveClass} className={activeClass}>
                            01
                            <span className="planet-img-span">OVERVIEW</span>
                        </button>
                        <button onClick={()=>setActiveClass} className={activeClass}>
                            02
                            <span className="planet-img-span">INTERNAL STRUCTURE</span>
                        </button>
                        <button onClick={()=>setActiveClass} className={activeClass}>
                            03
                            <span className="planet-img-span">SURFACE GEOLOGY</span>
                        </button>
                    </div>
            </div>
            </div>
            <div className="planet-data-display">
                <div className="planet-data-card">
                    <h4>ROTATION TIME</h4>
                    <h2>1.4DAYS</h2>
                </div>
                <div className="planet-data-card">
                    <h4>REVOLUTION TIME</h4>
                    <h2>123 DAYS</h2>
                </div>
                <div className="planet-data-card">
                    <h4>RADIUS</h4>
                    <h2> 1234 KM</h2>
                </div>
                <div className="planet-data-card">
                    <h4>AVERAGE TEMP.</h4>
                    <h2>100 C</h2>
                </div>
            </div>
        </div>
    )
}

export default PlanetMain;
