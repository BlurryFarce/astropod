# Astropod

Astropod is a web application that provides detailed information about space-related data, including Mars weather, daily astronomical images, close approach data for asteroids, and space-related podcasts. The app integrates data from NASA's APIs and presents it in a user-friendly format, along with related space podcasts from Spotify.

## Features

- **Asteroid Data**: Displays close approach data for asteroids for the next 7 days, including their name, ID, NASA JPL URL, absolute magnitude, miss distance, and relative velocity.
- **Mars Data**: Provides current weather data from Mars, including temperature, wind speed, and atmospheric pressure, retrieved using NASA's InSight: Mars Weather Service API.
- **Astronomy Picture of the Day (APOD)**: Displays NASA's Astronomy Picture of the Day with detailed information and descriptions.
- **Space Podcasts**: Integrates with Spotify API to provide users with space-related podcasts and shows.

## Demo

You can check out a live demo of Astropod [![Astropod](https://img.shields.io/badge/Astropod-7b7574?style=for-the-badge&logo=vercel)](https://astropod-zeta.vercel.app/)

## Technologies Used

- **Backend**: Express.js
- **Frontend**: Pug, CSS (with Flexbox and Grid)
- **API Integration**: 
  - NASA APIs: 
    - Mars Rover Photos API
    - InSight: Mars Weather Service API
    - Asteroids - NeoWs API
    - APOD (Astronomy Picture of the Day) API
  - Spotify API

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/astropod.git
    cd astropod
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your NASA API key and Spotify credentials:
     ```bash
     NASA_API_KEY=your_nasa_api_key
     SPOTIFY_CLIENT_ID=your_spotify_client_id
     SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
     ```

4. **Start the application**:
    ```bash
    npm start
    ```

   The app will be available at `http://localhost:3000`.

## Usage

- **Home Page**: View NASA's Astronomy Picture of the Day (APOD) with a detailed description.
- **Mars Page**: Get current weather data from Mars, including temperature, wind speed, and atmospheric pressure.
- **Asteroids Page**: View close approach data for asteroids for the next 7 days, displayed in a responsive grid format.
- **Podcasts Page**: Explore a curated list of space-related podcasts and shows from Spotify.

## API Integration

Astropod integrates multiple APIs to bring comprehensive space-related data to users:

- **NASA Mars Rover Photos API**: Fetches images taken by Mars rovers.
- **NASA InSight: Mars Weather Service API**: Provides real-time weather data from Mars.
- **NASA Asteroids - NeoWs API**: Displays close approach data for asteroids.
- **NASA APOD API**: Retrieves NASA's Astronomy Picture of the Day.
- **Spotify API**: Lists space-related podcasts and audio shows.

## Project Structure

```plaintext
astropod/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
├── routes/
│   ├── index.js
│   ├── mars.js
│   ├── asteroids.js
│   └── podcasts.js
├── services/
│   ├── apodService.js
│   ├── marsService.js
│   ├── asteroidService.js
│   └── spotifyService.js
├── utils/
│   └── utils.js
├── views/
│   ├── commons/
│   │   ├── header.pug
│   │   ├── footer.pug
│   │   └── layout.pug
│   ├── asteroids.pug
│   ├── mars.pug
│   ├── podcasts.pug
│   └── index.pug
├── .env
├── app.js
├── package.json
└── README.md
