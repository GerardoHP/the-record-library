const albums = [
  {
    id: 1,
    name: "Is This It",
    artistId: 1,
    year: 2001,
    albumCover: "https://images-na.ssl-images-amazon.com/images/I/81lKgbwEi%2BL._SL1417_.jpg"
  },
  {
    id: 2,
    name: "Elephant",
    artistId: 2,
    year: 2003,
    albumCover: "https://images-na.ssl-images-amazon.com/images/I/71e1DBAzgpL._SL1425_.jpg"
  },
  {
    id: 3,
    name: "Aha Shake Heartbreak",
    artistId: 3,
    year: 2004,
    albumCover: "https://images-na.ssl-images-amazon.com/images/I/41erswE6W-L.jpg"
  },
  {
    id: 4,
    name: "Youth and Young Manhood",
    artistId: 3,
    year: 2003,
    albumCover: ""
  }
];

const artists = [
  {
    id: 1,
    name: "The Strokes"
  },
  {
    id: 2,
    name: "The White Stripes"
  },
  {
    id: 3,
    name: "Kings Of Leon"
  },
  {
    id: 4,
    name: "The Kills"
  },
  {
    id: 5,
    name: "The Dead Weather"
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
