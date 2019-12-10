import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AlbumsList = ({ albums, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Album</th>
        <th>Artist</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {albums.map(a => {
        return (
          <tr key={a.id}>
            <td>
              <Link to={`/album/${a.id}`}>{a.name}</Link>{" "}
            </td>
            <td>{a.artist ? a.artist.name : "Loading ..."}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(a.id)}
              >
                Delete&nbsp;
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AlbumsList;
