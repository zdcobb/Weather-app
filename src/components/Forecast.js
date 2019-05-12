import React from 'react';
import getForecast from '../helpers/getForecast.js';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {}
        }
    }
    handleReturn = () => {

    }

    render() {
        return (
            <div>
                <Temperature temp={this.props.forecast.temperature} />
            </div>
        )
    }
}

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

export default Forecast;