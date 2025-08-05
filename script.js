const form = document.getElementById('location-form');
const input = document.getElementById('location-input');
const unit = document.getElementById('unit-select');
const loading = document.getElementById('loading');
const display = document.getElementById('weather-display');

form.addEventListener('click', formClick);

function formClick(event) {
    
    event.preventDefault();
}