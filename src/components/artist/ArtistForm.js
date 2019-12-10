import React from "react";
import TextInput from "../common/TextInput";
import PropTypes from "prop-types";

const ArtistForm = ({
  artist,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>Album</h2>
      <TextInput
        name="name"
        label="Name"
        value={artist.name}
        onChange={onChange}
        error={errors.name}
        pattern="[A-Za-z\s]*"
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

ArtistForm.propTypes = {
  artist: PropTypes.any.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.any.isRequired
};

export default ArtistForm;
