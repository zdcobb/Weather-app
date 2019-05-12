import React from 'react';
import Landing from './components/Landing.js';
import Forecast from './components/Forecast.js';
import getForecast from './helpers/getForecast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: '',
      forecast: {}
    }
  }

  fetchStationData = async (stationID) => {
    getForecast(stationID).then((response) => {
      this.setState({
        station: stationID,
        forecast: response.properties
      });
    });
  }

  render() {
    let pageShown;
    if (this.state.station !== '') {
      pageShown = <Forecast station={this.state.station} forecast={this.state.forecast} />;
    } else {
      pageShown = <Landing fetchData={this.fetchStationData} />;
    }
    return (
      <div className="App">
        
        {pageShown}

        <footer className="footer">
          <span>Designed & Developed by Zachary Cobb.</span>
        </footer>
      </div>
    )
  }
}

export default App;
