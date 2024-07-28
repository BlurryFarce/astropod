const dotenv = require('dotenv');
dotenv.config();

const { randomDate, endDate } = require('../utils/utils');


const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY =  process.env.NASA_API_KEY;

async function getAPOD() {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
}



async function getRandomMarsRoverPhoto() {
    //generate random date from the curiosity rover landing date to today
    const randomDateToSearch = randomDate(new Date(2012, 10, 1), new Date());

    //fetch photos from mars api for the random date
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${randomDateToSearch.toLocaleDateString('en-CA')}&api_key=${API_KEY}`);
    const data = await response.json();
   
    return data.photos[0];
}

async function getMarsWeather() {
    const response = await fetch(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
    const data = await response.json();
    return data;
}

async function getAsteroidData() {
    //get start and end dates for asteroid data, the end date is set to 100 years from now.
    const start_date = new Date();
    const end_date = endDate();

    //if the end date is not provieded, default it next 7 days from now
    const response = await fetch(` https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date.toLocaleDateString('en-CA')}&api_key=${API_KEY}`);
    const data = await response.json();
    return data;
}

module.exports = { getAPOD, getRandomMarsRoverPhoto, getMarsWeather, getAsteroidData }