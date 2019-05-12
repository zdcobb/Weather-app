import React from 'react';
import { Temperature, WindComponent, AirPressureComponent, VisibilityComponent, GenericProperty } from './ForecastComponents.js';
// import {translateUnitCode} from '../helpers/ForecastHelpers.js';

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
        console.log(this.props);
        let view;
        if (this.props.forecast) {
            view = (
                <div className="forecast-list">
                    <div className="forecast__header">{this.props.station}</div>
                    <Temperature temp={this.props.forecast.temperature} />
                    <span className="property forecast__header">{this.props.forecast.textDescription}</span>
                    <WindComponent speed={this.props.forecast.windSpeed} direction={this.props.forecast.windDirection} />
                    <GenericProperty desc="Humidity" condition={this.props.forecast.relativeHumidity} />
                    <GenericProperty desc="Dew Point" condition={this.props.forecast.dewpoint} />
                    <AirPressureComponent condition={this.props.forecast.barometricPressure} />
                    <VisibilityComponent condition={this.props.forecast.visibility} />
                </div>
                )
            
        } else {
            view = <div><h1 className="title">Whoops!</h1><h2>404: Station not found.</h2></div>;
        }

        return (
            <div>
                
                {view}

                <button className="btn" onClick={this.handleReturn}>See different station</button>
            </div>
        )
    }
}

export default Forecast;