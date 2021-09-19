import './App.css';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import data from './data.json';
import PlanetNav from './Components/PlanetNav';
import PlanetMain from './Components/PlanetMain';


function App() {
  const [planet, setPlanet] = useState('Earth');

  console.log(data);

  return (
    <BrowserRouter>
      <div className="App">
            <PlanetNav/>
        <Switch>

          {
            data.map((planet) => 
              <Route exact path={`/${planet.name}`}>
                  <PlanetMain
                    planet={planet}
                  />
              </Route>
            )
          }


          {/* <Route exact path='/earth'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/mercury'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/venus'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/mars'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/jupiter'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/saturn'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/uranus'>
            <PlanetMain
              planet={planet}
            />
          </Route>
          <Route exact path='/neptune'>
            <PlanetMain
              planet={planet}
            />
          </Route> */}
        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;
