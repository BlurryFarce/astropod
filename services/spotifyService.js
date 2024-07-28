const dotenv = require('dotenv');
dotenv.config();

const BASE_API_URL = 'https://api.spotify.com/v1/';
const client_id =  process.env.SPOTIFY_CLIENT_ID;
const BASE_EMBED_URL = 'https://open.spotify.com/oembed';
const showId = "5NT0kUEUIdS5FxotBPJvMX";
const showURL = "https://open.spotify.com/show/1qYTAxxwbVJ96784zUESrW";

async function getShow() {
    const response = await fetch(`${BASE_API_URL}show/${showId}}`);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getEmbed() {
    const response = await fetch(`${BASE_EMBED_URL}/?url=${encodeURI(showURL)}`);
    const data = await response.json();
    return data;
}

module.exports = { getShow, getEmbed }