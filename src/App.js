import React from 'react';
import Landing from './components/Landing.js';
import Forecast from './components/Forecast.js';
import { getForecast } from './helpers/ForecastHelpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: '',
      forecast: {}
    }
  }

  fetchStationData = (stationID) => {
    getForecast(stationID).then((response) => {
      // if (response.status === 404) return;
      this.setState({
        station: stationID,
        forecast: response.properties
      });
    });
  }

  clearStationSelection = () => {
    this.setState({ station: ''})
  }

  render() {
    let pageShown;
    if (this.state.station !== '') {
      pageShown = <Forecast station={this.state.station} forecast={this.state.forecast} clearStation={this.clearStationSelection} />;
    } else {
      pageShown = <Landing fetchData={this.fetchStationData} />;
    }
    return (
      <div className="App">
        <div className="content">
          {pageShown}
        </div>

        <footer className="footer">
          <span>Designed & Developed by Zachary Cobb.</span>
        </footer>
      </div>
    )
  }
}

export default App;
