import React, { useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as albumActions from "../../redux/actions/albumActions";
import * as artistActions from "../../redux/actions/artistActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import AlbumsList from "./AlbumList";

const AlbumsPage = ({
  albums,
  loading,
  loadAlbums,
  deleteAlbum,
  loadArtists
}) => {
  useEffect(() => {
    if (albums.length === 0) {
      loadAlbums().catch(error => alert(error));
      loadArtists().catch(error => alert(error));
    }
  });

  const handleDelte = id => {
    deleteAlbum(id);
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

AlbumsPage.propTypes = {
  albums: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadAlbums: PropTypes.func.isRequired,
  deleteAlbum: PropTypes.func.isRequired,
  loadArtists: PropTypes.func.isRequired
};

const mapStateToProps = ({ artists, albums, apiCallInProgress }) => {
  return {
    albums: albums.map(album => {
      album.artist = artists.find(artist => artist.id === album.artistId);
      return album;
    }),
    loading: apiCallInProgress > 0
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadAlbums: bindActionCreators(albumActions.loadAlbums, dispatch),
    deleteAlbum: bindActionCreators(albumActions.deleteAlbum, dispatch),
    loadArtists: bindActionCreators(artistActions.loadArtists, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);
