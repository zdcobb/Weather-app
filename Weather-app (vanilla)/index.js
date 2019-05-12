let station = '';
// let apiString = `https://api.weather.gov/stations/####/observations/latest`;
let urlStart = 'https://api.weather.gov/stations/';
let urlEnd = '/observations/latest';


document.addEventListener("DOMContentLoaded", function () {

    let form = document.forms['stationForm'];
    let errorElement = document.querySelector('#errorMsg');

    form['submitBtn'].addEventListener('click', function (ev) {

        let station = getStationID(form);
        // validate Station input, if valid call fetch and remove any error message
        if (validateStation(station)) {
            errorElement.innerHTML = null;
            fetchWeatherData(station).then(response => {
                showWeatherData(response, station);
            });

        } else {
            // If invalid, show error.
            errorElement.innerHTML = 'Invalid Station ID. Must be a 4-Letter ID.'
        }
    });
});

function getStationID(form) {
    // find ID of station we want to look up
    return form['stationID'].value;
}

function validateStation(station) {
    return /[A-Za-z]{4}/g.test(station);
}

function getAPIString(stationID) {
    // build our API string with the given Station ID
    return urlStart + stationID + urlEnd;
}

function fetchWeatherData(stationID) {
    // use fetch to call API with station ID
    return fetch(getAPIString(stationID)).then((response) => response.json());
    // we add the extra level of abstraction (.then and return the response.json) rather than just return the response
    // because otherwise we'd get a big response header/body that we don't need. All we need is the data, so we save a step and return the json
}

function showWeatherData(data, station) {
    console.log(data);
    document.querySelector('#stationName').innerHTML = station;
    let conditionsContainer = document.querySelector('#conditions');
    conditionsContainer.innerHTML = '';

    let weatherData = document.createElement('section');
    weatherData.append(createWeatherProp('Temperature', data.properties.temperature));
    weatherData.append(createWeatherProp('Wind Speed', data.properties.windSpeed));
    weatherData.append(createWeatherProp('Wind Direction', data.properties.windDirection));
    // document.body.style.backgroundImage = `url(${data.properties.icon})`;

    conditionsContainer.append(weatherData);
}

function createWeatherProp(name, data) {
    
    let container = document.createElement('div');
    container.classList.add('prop');

    // console.log(data.keys()[0]);
    let label = document.createElement('label');
    label.appendChild(document.createTextNode(name));
    // label.innerHTML(name);

    let prop = document.createElement('span');
    prop.appendChild(document.createTextNode(` ${parseInt(data.value).toFixed(2)} ${data.unitCode}`));
    // prop.innerHTML(`${data.value} ${data.unitCode}`);
    
    container.append(label);
    container.append(prop);
    return container;
}