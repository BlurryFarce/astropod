const dotenv = require('dotenv');
dotenv.config();

const client_id =  process.env.SPOTIFY_CLIENT_ID;
const client_secret =  process.env.SPOTIFY_CLIENT_SECRET;

const BASE_API_URL = 'https://api.spotify.com/v1/';
const BASE_EMBED_URL = 'https://open.spotify.com/oembed';
const { featuredPodcasts }= require('../utils/utils');

// for local cache
let accessToken = null;
let tokenExpiry = null;

async function getShow(showId) {
    const response = await fetch(`${BASE_API_URL}show/${showId}}`);
    const data = await response.json();
    return data;
}

async function getEmbed(showURL) {
    const response = await fetch(`${BASE_EMBED_URL}/?url=${encodeURI(showURL)}`);
    const data = await response.json();
    return data;
}

async function getRandomFeaturedPodcast() {
    const randomPodcast = featuredPodcasts[Math.floor(Math.random() * featuredPodcasts.length)];
    return randomPodcast;
}

async function getPodcasts() {
    const token = await getAccessToken();
    const query = encodeURIComponent('space astronomy');
    const response = await fetch(`${BASE_API_URL}search?q=${query}&type=show&market=US&limit=5`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.shows.items;
}

async function getEpisodes() {
    const token = await getAccessToken();

    const query = 'space astronomy';
    const response = await fetch(`${BASE_API_URL}search?q=${query}&type=episode&market=US&limit=5`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data.episodes.items;
}

async function getAccessToken() {
    //do not request new token if it is not expired
    if (!accessToken || (tokenExpiry && new Date() > tokenExpiry)) {
        console.log('Requesting new access token');
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
            },
            body: 'grant_type=client_credentials'
        });

        const data = await response.json();
        accessToken = data.access_token;
        // Set token expiry time (current time + expires_in seconds)
        tokenExpiry = new Date(new Date().getTime() + data.expires_in * 1000);
    } else {
        console.log('Using cached access token');
    }

    return accessToken;
}

module.exports = { getShow, getEmbed, getRandomFeaturedPodcast, getPodcasts, getEpisodes };

