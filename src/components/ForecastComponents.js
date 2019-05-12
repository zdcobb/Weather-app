import React from 'react';
import {translateUnitCode, getWindDirection} from '../helpers/ForecastHelpers.js';

class Temperature extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          display: 'C'
      }
  }
  handleClick = (event) => {
      this.setState({ display: event.target.value });
  }
  render() {
      let temp = this.props.temp.value;
      if (this.state.display === 'F') temp = ((temp * 1.8) + 32);
      return (
        <div className="property property--temp">
          <span className="value">{temp.toFixed(2)} </span>
          <span className="property--unit property--unit__temp">
            <button className={this.state.display === 'C' ? 'temp__btn temp__btn--selected' : 'temp__btn'} onClick={this.handleClick} value="C">°C</button> / 
            <button className={this.state.display === 'F' ? 'temp__btn temp__btn--selected' : 'temp__btn'} onClick={this.handleClick} value="F">°F</button>
          </span>          
        </div>
      )
  }
}
function WindComponent(props) {
  let speed = props.speed;
  let unit = `${translateUnitCode(speed.unitCode)}, ${getWindDirection(props.direction.value)}`;
  return (
    // <GenericProperty desc="Wind" value={parseInt(speed.value.toFixed(2))} unit={unit} />
    <div className="property">
      <span className="property__label">Wind: </span>
      <span className="property__value">{speed.value.toFixed(2)}</span>
      <span className="property__unit">{unit}</span>
    </div>
  )
}

function AirPressureComponent(props) {
  if (props.condition.value > 1000) {
    props.condition.value = props.condition.value / 1000;
    props.condition.unitCode = 'kPa';
  }
  return (
    <GenericProperty desc="Air Pressure" condition={props.condition} />
  )
}

function VisibilityComponent(props) {
  if (props.condition.value > 1000) {
    props.condition.value = props.condition.value / 1000;
    props.condition.unitCode = 'km';
  }
  return (
    <GenericProperty desc="Visibility" condition={props.condition} />
  )
}

function GenericProperty(props) {
  return (
      <div className="property">
          <span className="property__label">{props.desc}: </span>
          <span className="property__value">{props.condition.value.toFixed(2)}</span>
          <span className="property__unit">{translateUnitCode(props.condition.unitCode)}</span>
      </div>
  )
}

// function getWindDirection(degree) {
//   let divisions = Math.floor((degree - 15 ) / 45);
//   let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
//   return directions[divisions];  
// }

export { Temperature, WindComponent, AirPressureComponent, VisibilityComponent, GenericProperty };