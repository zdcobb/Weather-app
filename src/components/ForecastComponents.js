import React from 'react';

class Temperature extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          display: 'C'
      }
  }
  changeDisplay = (unit) => {
      
  }
  handleClick = (event) => {
      this.setState({ display: event.target.value });
  }
  render() {
      let temp = this.props.temp.value;
      if (this.state.display === 'F') temp = ((temp * 1.8) + 32);
      console.log(temp);
      return (
          <div className="property property--temp">
              <span className="value">{temp.toFixed(2)} </span>
              <span className="property--unit property--unit__temp">
                  <button className={this.state.display === 'C' ? 'temp__btn temp__btn--selected' : 'temp__btn'} onClick={this.handleClick} value="C">C &deg;</button>
                  / <button className={this.state.display === 'F' ? 'temp__btn temp__btn--selected' : 'temp__btn'} onClick={this.handleClick} value="F">F &deg;</button>
              </span>
          </div>
      )
  }
}

function windComponent(props) {
  return (
    <div className="property">
      <span className="label">Wind: </span>
      <span className="value">{props.windSpeed.value}</span>
      <span className="property--unit">m/s</span>
    </div>
  )
}

function windSpeed(props) {
  return (
    <div></div>
  )
}

function GenericProperty(props) {
  return (
      <div className="property">
          <span className="label">{props.desc}: </span>
          <span className="value">{props.value}</span>
          <span className="property--unit">{props.unit}</span>
      </div>
  )
}

export { Temperature, GenericProperty };