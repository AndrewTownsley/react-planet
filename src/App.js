import './App.css';
import PlanetNav from './Components/PlanetNav';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>The Planets</h1>
        <PlanetNav/>
      </div>  
    </BrowserRouter>
  );
}

export default App;
