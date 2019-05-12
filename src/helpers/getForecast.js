let urlStart = 'https://api.weather.gov/stations/';
let urlEnd = '/observations/latest';

function getForecast(station) {
    return fetch(buildUrlString(station)).then((response) => response.json());
}

function buildUrlString(station) {
    // builds a url string to call the API with. Easier to break it out into it's own function in-case anything ever changes with this.
    return urlStart.concat(station).concat(urlEnd);
}

export default getForecast;