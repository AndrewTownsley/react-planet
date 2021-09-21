import './App.css';
import { Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import data from './data.json';
import PlanetNav from './Components/PlanetNav';
import PlanetMain from './Components/PlanetMain';


function App() {
  const [planet, setPlanet] = useState('Earth');
  console.log(planet)

  // const handlePlanetRoute = () => {
  //   setPlanet(planet)
  // }

  return (
    <BrowserRouter>
      <div className="App">
            <PlanetNav
              setPlanet={setPlanet}
            />
        <Switch>
        <Route exact path="/">
          <Redirect to="/earth" />
        </Route>


          {
            data.map((planet) => 
            <Route key={planet.name} exact path={`/${planet.name}`}>
                  <PlanetMain
                    key={planet}
                    planet={planet}
                    setPlanet={setPlanet}
                    />
              </Route>
            )
          }

          {/* <Route path='/earth'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/mercury'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/venus'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/mars'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/jupiter'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/saturn'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/uranus'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route>
          <Route exact path='/neptune'>
            <PlanetMain
              planet={planet}
              setPlanet={setPlanet}
            />
          </Route> */}
        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;
