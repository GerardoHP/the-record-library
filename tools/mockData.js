const albums = [
  {
    id: 1,
    name: "White Album",
    artistId: 1,
    year: 1969,
    albumCover: ""
  },
  {
    id: 2,
    name: "Help",
    artistId: 1,
    year: 1970,
    albumCover: ""
  },
  {
    id: 3,
    name: "Aftermath",
    artistId: 2,
    year: 1966,
    albumCover: ""
  }
];

const artists = [
  {
    id: 1,
    name: "The Beatles"
  },
  {
    id: 2,
    name: "The Rolling Stones"
  }
];

const newAlbum = {
  albumCover: "",
  id: null,
  name: "",
  artistId: null,
  year: null
};

const newArtist = {
  id: null,
  name: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newAlbum,
  albums,
  artists,
  newArtist
};
