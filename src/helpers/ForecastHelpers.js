let urlStart = 'https://api.weather.gov/stations/';
let urlEnd = '/observations/latest';
let unitDict = {
    'degC': '°C',
    'degF': '°F',
    'Pa': 'Pa',
    'm': 'm',
    'm_s-1': 'm/s',
    'percent': '%',
    // 'degree_(angle)': getDirection
}

function getForecast(station) {
    return fetch(buildUrlString(station)).then((response) => response.json());
}

function buildUrlString(station) {
    // builds a url string to call the API with. Easier to break it out into it's own function in-case anything ever changes with this.
    return urlStart.concat(station).concat(urlEnd);
}

function translateUnitCode(unitCode) {
    let code = unitCode.replace(/unit:/g, '');

    if (!unitDict[code] || !code) return code;
    else return unitDict[code];
}

function getWindDirection(degree) {
    let divisions = Math.floor((degree) / 45);
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    return directions[divisions];  
}

export { getForecast, translateUnitCode, getWindDirection};