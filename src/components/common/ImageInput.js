import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../no-image.png";
import './ImageInput.scss';

const ImageInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  pattern
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          pattern={pattern}
        />
        {error && <div className="alert alert-danger">{error}</div>}
        {
          // TODO: add support for search the image online
        }
        {/* <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div> */}

        
      </div>

      <img id="imageDisplay"
        src={value ? value : defaultImage}
        alt="..."
        className="img-thumbnail"
      />
    </div>
  );
};

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  pattern: PropTypes.string
};

export default ImageInput;
