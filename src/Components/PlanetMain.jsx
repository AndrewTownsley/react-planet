import ToggleBtn from './ToggleBtn';
import data from '../data.json';


const PlanetMain = ({ planet }) => { 

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
            <ToggleBtn
                planet={planet}
            />
            </div>
            </div>
            <div className="planet-data-display">
                <div className="planet-data-card">
                    <h4>ROTATION TIME</h4>
                    <h2>{planet.rotation}</h2>
                </div>
                <div className="planet-data-card">
                    <h4>REVOLUTION TIME</h4>
                    <h2>{planet.revolution}</h2>
                </div>
                <div className="planet-data-card">
                    <h4>RADIUS</h4>
                    <h2>{planet.radius}</h2>
                </div>
                <div className="planet-data-card">
                    <h4>AVERAGE TEMP.</h4>
                    <h2>{planet.temperature}</h2>
                </div>
            </div>
        </div>
    )
}

export default PlanetMain;
