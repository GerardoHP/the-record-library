import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as artistActions from "../../redux/actions/artistActions";
import ArtistForm from "./ArtistForm";

const ManageArtistPage = ({
  artists,
  artist: initialArtist,
  history,
  loadArtists,
  saveArtist
}) => {
  const [artist, setArtist] = useState({ ...initialArtist });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (artists.length === 0) loadArtists().catch(error => alert(error));
    else setArtist({ ...initialArtist });
  }, [artists.length]);

  const handleChange = ({ target: { name, value } }) => {
    const _artist = {
      ...artist,
      [name]: value
    };

    setArtist(_artist);
    setChanged(JSON.stringify(initialArtist) !== JSON.stringify(_artist));
  };

  const handleSave = event => {
    event.preventDefault();
    if (!formIsInvalid()) return;

    setSaving(true);
    saveArtist(artist)
      .then(() => history.goBack())
      .catch(error => {
        setErrors({ ...errors, onSave: error.message });
        setSaving(false);
      });
  };

  function formIsInvalid() {
    const { name } = artist;
    const errors = {};

    if (!name) errors.name = "Name is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <>
      <Prompt when={changed} message="Leave without saving?" />
      <ArtistForm
        artist={artist}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </>
  );
};

ManageArtistPage.propTypes = {
  artists: PropTypes.array.isRequired,
  artist: PropTypes.any,
  history: PropTypes.any.isRequired,
  loadArtists: PropTypes.func.isRequired,
  saveArtist: PropTypes.func.isRequired
};

const mapStoreToProps = (
  { artists },
  {
    history,
    match: {
      params: { id }
    }
  }
) => {
  let artist;
  if (id !== undefined && artists.length > 0) {
    const _id = parseInt(id);
    if (_id) {
      artist = artists.find(a => a.id === _id);
      if (!artist) history.push("/NotFound");
    } else history.push("/NotFound");
  }

  return { artists, artist, history };
};

const mapDispatchToProps = dispatch => {
  return {
    loadArtists: bindActionCreators(artistActions.loadArtists, dispatch),
    deleteArtist: bindActionCreators(artistActions.deleteArtist, dispatch),
    saveArtist: bindActionCreators(artistActions.saveArtists, dispatch)
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ManageArtistPage);
