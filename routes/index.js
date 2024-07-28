const express = require('express');
const router = express.Router();
const { getAPOD, getRandomMarsRoverPhoto, getMarsWeather } = require('../services/nasaService');
const { getEmbed } = require('../services/spotifyService');

// Home route
router.get('/', async (req, res) => {
    try {
        const pictureOfTheDayData = await getAPOD();
        const featuredPodcastEmbed = await getEmbed();
        res.render('index', { pictureOfTheDayData, featuredPodcastEmbed });
    } catch (error) {
        console.error('Error fetching picture of the day:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Mars route
router.get('/mars', async (req, res) => {
    try {
        const roverPhotoData = await getRandomMarsRoverPhoto();
        const marsWeather = await getMarsWeather();
        res.render('mars', { roverPhotoData, marsWeather });
    } catch (error) {
        console.error('Error fetching Mars data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Asteroids route
router.get('/asteroids', async (req, res) => {
    try {
        const asteroids = await getAsteroidData();
        res.render('asteroids', { asteroids });
    } catch (error) {
        console.error('Error fetching asteroids data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
