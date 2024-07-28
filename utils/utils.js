const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//for asteroid data
const endDate = () => {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var day = currentDate.getDate();
  var endDate = new Date(year + 100, month, day);
  return endDate;
}

const featuredPodcasts = [
  {
    id: 0,
    spotifyId: '73TygG2cEGJPWbOGPB2CZ0',
    spotify_url: "https://open.spotify.com/show/73TygG2cEGJPWbOGPB2CZ0"
  },
  {
    id: 1,
    spotifyId: '2JXFCMLGVhTBtdz1WYxd4H',
    spotify_url: "https://open.spotify.com/show/2JXFCMLGVhTBtdz1WYxd4H"
  },
  {
    id: 2,
    spotifyId: '1qYTAxxwbVJ96784zUESrW',
    spotify_url: "https://open.spotify.com/show/1qYTAxxwbVJ96784zUESrW"
  },
  {
    id: 3,
    spotifyId: '4y1JjCMMLIgANRktxeOwF6',
    spotify_url: "https://open.spotify.com/show/4y1JjCMMLIgANRktxeOwF6"
  },
  {
    id: 4,
    spotifyId: '5NT0kUEUIdS5FxotBPJvMX',
    spotify_url: "https://open.spotify.com/show/5NT0kUEUIdS5FxotBPJvMX"
  }
];

module.exports = { randomDate, endDate, featuredPodcasts }