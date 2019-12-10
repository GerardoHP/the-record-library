import React, { useEffect } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import ImageInput from "../common/ImageInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as artistActions from "../../redux/actions/artistActions";
import PropTypes from "prop-types";

const AlbumForm = ({
  album,
  onSave,
  onChange,
  saving = false,
  errors = {},
  artists,
  loadArtists
}) => {
  useEffect(() => {
    if (artists.length === 0) loadArtists().catch(error => alert(error));
  });

  return (
    <form onSubmit={onSave}>
      <h2>Album</h2>
      <TextInput
        name="name"
        label="Name"
        value={album.name}
        onChange={onChange}
        error={errors.name}
        pattern="[A-Za-z\s]*"
      />
      <SelectInput
        name="artistId"
        label="Artist"
        value={album.artistId}
        options={artists.map(a => ({ text: a.name, value: a.id }))}
        onChange={onChange}
        error={errors.artistId}
        disabled={artists.length === 0}
        newRedirect="/artist"
      />
      <ImageInput
        name="albumCover"
        label="Album Cover"
        value={album.albumCover}
        onChange={onChange}
        error={errors.albumCover}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? (
          <>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Saving ...
          </>
        ) : (
          <>Save</>
        )}
      </button>
    </form>
  );
};

AlbumForm.propTypes = {
  album: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.any.isRequired,
  artists: PropTypes.array.isRequired,
  loadArtists: PropTypes.func.isRequired
};

const mapStoreToProps = ({ artists }) => {
  return {
    artists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadArtists: bindActionCreators(artistActions.loadArtists, dispatch)
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(AlbumForm);
