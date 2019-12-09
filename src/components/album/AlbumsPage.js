import React from "react";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import AlbumsList from "./AlbumList";

const AlbumsPage = () => {
  let loading = false;
  const albums = [
    {
      id: 1,
      name: "White Album",
      artist: { id: 1, name: "The Beatles" },
      year: 1969,
      albumCover: ""
    },
    {
      id: 2,
      name: "Help",
      artist: { id: 1, name: "The Beatles" },
      year: 1970,
      albumCover: ""
    }
  ];

  const handleDelte = id => {
    alert(id);
  };

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
