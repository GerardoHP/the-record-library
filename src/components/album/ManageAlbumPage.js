import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Prompt } from "react-router-dom";
import PropTypes from "prop-types";
import AlbumForm from "./AlbumForm";
import * as albumActions from "../../redux/actions/albumActions";

const ManageAlbumPage = ({
  album: initialAlbum,
  albums,
  loadAlbums,
  saveAlbums
}) => {
  const [errors, setErrors] = useState({});
  const [album, setAlbum] = useState({ ...initialAlbum });
  const [saving, setSaving] = useState(false);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (albums.length === 0) loadAlbums().catch(error => alert(error));
    else setAlbum({ ...initialAlbum });
  }, [albums.length]);

  const handleChange = ({ target: { name, value } }) => {
    const _album = {
      ...album,
      [name]: value
    };

    setAlbum(_album);
    setChanged(JSON.stringify(initialAlbum) !== JSON.stringify(_album));
  };

  const handleSave = event => {
    event.preventDefault();
    if (!formIsInvalid()) return;

    setSaving(true);
    saveAlbums(album)
      .then(() => history.push("/albums"))
      .catch(error => {
        setErrors({ ...errors, onSave: error.message });
        setSaving(false);
      });
  };

  function formIsInvalid() {
    const { name, artistId, albumCover } = album;
    const errors = {};
    
    if (!name) errors.name = "Name is required";
    if (!artistId) errors.artistId = "Artist is required";
    if (!albumCover) errors.albumCover = "Image is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <>
      <Prompt when={changed} message="Leave without saving?" />
      <AlbumForm
        album={album}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </>
  );
};

ManageAlbumPage.propTypes = {
  album: PropTypes.object,
  albums: PropTypes.array.isRequired,
  loadAlbums: PropTypes.func.isRequired,
  saveAlbums: PropTypes.func.isRequired
};

const mapStatetToProps = (
  { albums },
  {
    match: {
      params: { id },
      history
    }
  }
) => {
  let album;
  if (id !== undefined && albums.length > 0) {
    const _id = parseInt(id);
    if (_id) {
      album = albums.find(a => a.id === _id);
      if (!album) history.push("/NotFound");
    } else history.push("/NotFound");
  }

  return {
    album,
    albums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAlbums: bindActionCreators(albumActions.loadAlbums, dispatch),
    saveAlbums: bindActionCreators(albumActions.saveAlbums, dispatch)
  };
};

export default connect(mapStatetToProps, mapDispatchToProps)(ManageAlbumPage);
