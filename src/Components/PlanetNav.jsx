import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import data from '../data.json'


const PlanetNav = ({ setPlanet }) => {

                 
        return (
            <div className="planet-nav">
                <h1>THE PLANETS</h1>
                <nav>
                    <ul className="planet-nav-list">
                        {
                            data.map((planet) => 
                                <NavLink onClick={() => setPlanet(`${planet.name}`)} key={planet.name} to={`/${planet.name}`}>
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
