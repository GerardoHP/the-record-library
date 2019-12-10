import React, { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import AlbumsList from "./AlbumList";

const AlbumsPage = () => {
  const initialAlbums = [
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

  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState(initialAlbums);

  const handleDelte = id => {
    alert(id);
  };

  useEffect(() => {
    setAlbums(
      initialAlbums.map(album => {
        album.artist = artists.find(artist => artist.id === album.artistId);
        return album;
      })
    );
    setLoading(false);
  });

  return (
    <>
      <h2>Albums</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/album" className="btn btn-primary my-2">
            Add album
          </Link>
          <AlbumsList albums={albums} onDelete={handleDelte} />
        </>
      )}
    </>
  );
};

export default AlbumsPage;
