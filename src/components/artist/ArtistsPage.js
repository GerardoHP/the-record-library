import React, { useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as artistActions from "../../redux/actions/artistActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import AlbumsList from "./ArtistList";

const ArtistsPage = ({
  artists,
  loading,
  deleteArtist,
  loadArtists
}) => {
  useEffect(() => {
    if (artists.length === 0) {
      loadArtists().catch(error => alert(error));
    }
  });

  const handleDelte = id => {
    deleteArtist(id);
  };

  return (
    <>
      <h2>Albums</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/artist" className="btn btn-primary my-2">
            Add artist
          </Link>
          <AlbumsList artists={artists} onDelete={handleDelte} />
        </>
      )}
    </>
  );
};

ArtistsPage.propTypes = {
  artists: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteArtist: PropTypes.func.isRequired,
  loadArtists: PropTypes.func.isRequired
};

const mapStateToProps = ({ artists, apiCallInProgress }) => {
  return {
    artists,
    loading: apiCallInProgress > 0
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteArtist: bindActionCreators(artistActions.deleteArtist, dispatch),
    loadArtists: bindActionCreators(artistActions.loadArtists, dispatch)

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);
