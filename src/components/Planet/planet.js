import React, { Component } from 'react';
import planets from '../../services/planets'
import './planet.scss'

class planet extends Component {

    constructor(props){
      super(props)
      this.state = {
        planet:{
          name: '',
          rotation_period: '',
          orbital_period: '',
          diameter:'',
          climate:'',
          gravity:'',
          terrain: '',
          surface_water: '',
          population: '',
          created: '',
          edited: '',
        }
      }
    }
  
    getPlanetData = () => {
      let idPlanet = Math.floor(Math.random() * 61 + 1);
      planets.getPlanet(idPlanet).then(planet => {
        this.setState({planet: planet.data})
      })
    };
    
    componentDidMount() {
        this.getPlanetData()
    }
  
    render() {
      return ( 
    <div>
      <div className="planet-card">
        <div className="toph"><h1>PLANET</h1></div>
          <h1>{this.state.planet.name}</h1>
          <div className="details">
            <ul>
              <li><span>CLIMATE</span> <span>{this.state.planet.climate}</span></li>
              <li><span>GRAVITY</span> <span>{this.state.planet.gravity}</span></li>
              <li><span>POPULATION</span> <span>{this.state.planet.population}</span> </li>
              <li><span>TERRAIN</span> <span>{this.state.planet.terrain}</span></li>
              <li><span>DIAMETER</span> <span>{this.state.planet.diameter}</span></li>
            </ul>
          </div>
      </div>
  <input className="start-btn" type="button" value="NEXT" onClick={this.getPlanetData} />
  </div>
      );
    }
  }
  
  export default planet;
  