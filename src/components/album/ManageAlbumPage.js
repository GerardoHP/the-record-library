import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { PropTypes } from "prop-types";
import AlbumForm from "./AlbumForm";

const ManageAlbumPage = ({
  match: {
    params: { id }
  }
}) => {
  const [errors, setErrors] = useState({});
  const [album, setAlbum] = useState({});
  const [saving, setSaving] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    const _album = {
      ...album,
      [name]: value
    };

    setAlbum(_album);
    // setChanged(JSON.stringify(initialAuthor) !== JSON.stringify(_album));
  };

  const handleSave = event => {
    event.preventDefault();
    if (!formIsInvalid()) return;
  };

  function formIsInvalid() {
    const { name } = album;
    const errors = {};

    if (!name) errors.name = "Name is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <>
      <Prompt when={true} message="Leave without saving?" />
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
  match: PropTypes.object
};

export default ManageAlbumPage;
