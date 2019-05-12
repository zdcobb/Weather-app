import React from 'react';
import { Temperature, GenericProperty } from './ForecastComponents.js';
import getForecast from '../helpers/getForecast.js';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {}
        }
    }
    handleReturn = () => {
        this.props.clearStation();
    }

    render() {
        console.log(this.props.forecast);
        return (
            <div>
                <Temperature temp={this.props.forecast.temperature} />

                <div className="forecast-list">
                    <span className="property">{this.props.forecast.textDescription}</span>
                    
                </div>

                <button className="btn" onClick={this.handleReturn}>See different station</button>
            </div>
        )
    }
}

export default Forecast;