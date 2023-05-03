import './style.css';

//DOM
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');

window.onload = async (e) => {
    const defaultData = await getWeather('Seattle');
    replaceInfo(defaultData);
}


submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const input = document.querySelector('input');  
    const givenLocation = input.value;
    const myData = await getWeather(givenLocation);
    console.log(myData.current.condition.icon);
    form.reset();    
    if(myData.status !== 400){
        replaceInfo(myData);
    }
})




//fetch data from Weather API
async function getWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5ea1967514b44a72b05205214231904&q=${location}`, {
        mode: 'cors'
    });
    const weatherData = await response.json();
    
    if(response.status === 400){
        document.getElementById("error").style.opacity = "1";
    } else{
        document.getElementById("error").style.opacity = "0";

    }

    return await weatherData;
}

//add add as dom
function replaceInfo(data) {

    document.getElementById("location").innerHTML = data.location.name;
    document.getElementById("icon").src = `https:${data.current.condition.icon}`;
    document.getElementById("country").innerHTML = data.location.country;
    document.getElementById("weather").innerHTML = data.current.condition.text;
    document.getElementById("temp").innerHTML = data.current.temp_c;

    document.getElementById("feels").innerHTML = data.current.feelslike_c;
    document.getElementById("wind").innerHTML = data.current.wind_kph;
    document.getElementById("humidity").innerHTML = data.current.humidity;


}