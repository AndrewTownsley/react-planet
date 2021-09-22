import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import data from '../data.json'


const PlanetNav = ({ planet, setPlanet }) => {

                 
        return (
            <div className="planet-nav">
                <h1>THE PLANETS</h1>
                <nav>
                    <ul className="planet-nav-list">
                        {
                            data.map((planet, index) => 
                                <NavLink onClick={() => setPlanet(`${planet.name}`)} 
                                    key={planet.name} 
                                    index={index}
                                    to={`/${planet.name}`}
                                    className={planet.name}
                                >
                                    <h4>{planet.name.toUpperCase()}</h4>
                                </NavLink>
                            )
                        }
                    </ul>
                </nav>
        </div>
    )
}

export default PlanetNav
