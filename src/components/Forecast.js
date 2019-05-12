import React from 'react';
import { Temperature, WindComponent, AirPressureComponent, VisibilityComponent, GenericProperty } from './ForecastComponents.js';
import {translateUnitCode} from '../helpers/ForecastHelpers.js';

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
                    <span className="property property--weather"><b>{this.props.forecast.textDescription}</b></span>
                    <WindComponent speed={this.props.forecast.windSpeed} direction={this.props.forecast.windDirection} />
                    {/* <GenericProperty desc="Humidity" value={this.props.forecast.relativeHumidity.value.toFixed(2) + '%'} />
                    <GenericProperty desc="Dew Point" value={this.props.forecast.dewpoint.value.toFixed(2)} unit={translateUnitCode(this.props.forecast.dewpoint.unitCode)} />
                    <GenericProperty desc="Air Pressure" value={this.props.forecast.barometricPressure.value.toFixed(2)} /> */}
                    <GenericProperty desc="Humidity" condition={this.props.forecast.relativeHumidity} />
                    <GenericProperty desc="Dew Point" condition={this.props.forecast.dewpoint} />
                    <AirPressureComponent condition={this.props.forecast.barometricPressure} />
                    <VisibilityComponent condition={this.props.forecast.visibility} />

                </div>

                <button className="btn" onClick={this.handleReturn}>See different station</button>
            </div>
        )
    }
}

export default Forecast;