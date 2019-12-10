import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import ImageInput from "../common/ImageInput";

const AlbumForm = ({
  album,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
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
        error={errors.artist}
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

export default AlbumForm;
