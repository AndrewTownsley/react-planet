import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';
import data from '../data.json'


const PlanetNav = () => {
                 
        return (
            <div>
                <h1>The Planets</h1>
                <nav>
                    <ul>
                        {
                            data.map((planet) => 
                                <NavLink key={planet.name} to={`/${planet.name}`}>{planet.name}</NavLink>
                            )
                        }
                    </ul>
                </nav>
        </div>
    )
}

export default PlanetNav
