import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArtistList = ({ artists, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Artist</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {artists.map(a => {
        return (
          <tr key={a.id}>
            <td>
              <Link to={`/album/${a.id}`}>{a.name}</Link>{" "}
            </td>
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

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ArtistList;
