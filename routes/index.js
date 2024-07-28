const express = require('express');
const router = express.Router();
const { getAPOD, getRandomMarsRoverPhoto, getMarsWeather, getAsteroidData } = require('../services/nasaService');
const { getEmbed, getRandomFeaturedPodcast, getPodcasts, getEpisodes } = require('../services/spotifyService');

// Home route
router.get('/', async (req, res) => {
    try {

        const pictureOfTheDayData = await getAPOD();
        const randomPodcast = await getRandomFeaturedPodcast();
        const featuredPodcastEmbed = await getEmbed(randomPodcast.spotify_url);
        res.render('index', { title: 'Home', pictureOfTheDayData, featuredPodcastEmbed });

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
        res.render('mars', {title : 'Mars', roverPhotoData, marsWeather });
    } catch (error) {
        console.error('Error fetching Mars data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Asteroids route
router.get('/asteroids', async (req, res) => {
    try {
        const asteroidData = await getAsteroidData();
        res.render('asteroids', { title: 'Asteroids', asteroidData });
    } catch (error) {
        console.error('Error fetching asteroids data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Podcast route
router.get('/podcasts', async (req, res) => {
    try {
        const podcastsData = await getPodcasts();
        const episodesData = await getEpisodes();

        for (let podcast of podcastsData) {
            const embed = await getEmbed(podcast.external_urls.spotify);
            podcast.embedHtml = embed.html;
        }

        for (let episode of episodesData) {
            const embed = await getEmbed(episode.external_urls.spotify);
            episode.embedHtml = embed.html;
        }

        res.render('podcasts', { title: 'Podcasts', podcastsData, episodesData });
    } catch (error) {
        console.error('Error fetching podcast data:', error);
        res.status(500).send('Internal Server Error');
    }
});
module.exports = router;
