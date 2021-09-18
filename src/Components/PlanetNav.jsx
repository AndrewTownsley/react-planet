import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import data from '../data.json'


const PlanetNav = () => {
    
    console.log(data);
     
        

        
        return (
            <div>
           <nav>
               <ul>
                   {
                    data.map((planet) => 
                        <Link to="#">{planet.name}</Link>
                    )
                   }
               </ul>
           </nav>
        </div>
    )
}

export default PlanetNav
