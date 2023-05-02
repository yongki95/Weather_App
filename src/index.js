//getting Search location data
function getLocation() {
    var form = document.querySelector('form');
    var data = new FormData(form);
}

//fetch data from Weather API
async function getWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5ea1967514b44a72b05205214231904&q=${location}`, {
        mode: 'cors'
    });
    const weatherData = await response.json();
    return weatherData;
}


//add add as dom
async function putElement() {
    

}

putElement();

