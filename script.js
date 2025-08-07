const form = document.getElementById('location-form');
const input = document.getElementById('location-input');
const unit = document.getElementById('unit-select');
const loading = document.getElementById('loading');
const display = document.getElementById('weather-display');

const apiKey = "74691a59694d3ab434611520f720566d";

form.addEventListener('submit', formClick);

function showLoading() {
    loading.classList.remove('hidden');
    display.classList.add('hidden');
}

async function formClick(event) {
    event.preventDefault();
    // const location = input.value.trim();
    // const selectedUnit = unit.value;

    showLoading();
    const data = await getData();
    displayData(data)
    console.log(data);

    // console.log("Loaction: " + location);
    // console.log("Unit: " + selectedUnit);
}

function toCelsius (temp){
    return (temp - 273.15).toFixed(1);
}

function toFar(temp){
    return ((temp - 273.15) * 9/5 + 32).toFixed(1);
}

function convertTemp(temp){
      if (unit.value === 'us'){
        return (toFar(temp));
    } else if(unit.value === 'metric') {
        return toCelsius(temp);
    }
}

function displayData(obj){
    loading.classList.add('hidden');
    display.classList.remove('hidden');
    const displayName = document.getElementById('city-name');
    const displayTemp = document.getElementById('temperature');
    const jsontemp = obj.main.temp;
    console.log("Temp before conversion:",jsontemp );
    console.log("Type of temp:", typeof jsontemp);
    const temp = obj.main.temp; 
    convertTemp(temp);
    displayTemp.innerHTML = convertTemp(temp);
    displayName.innerHTML = obj.name;
}

async function getData () {
    const location = input.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    try {
    const respose = await fetch(apiUrl);
    if (!respose.ok) {
        throw new Error(`Response status: Failed`)
            }
        const result = await respose.json();
        // console.log(result);
        return result;
    } catch (error) {
        console.error(error.message)
    }
    console.log(apiUrl);
    
}


