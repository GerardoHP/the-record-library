import React from "react";
import PropTypes from "prop-types";

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
    //     <div class="input-group mb-3">
    //   <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
    //   <div class="input-group-append">
    //     <button class="btn btn-outline-secondary" type="button">Button</button>
    //   </div>
    // </div>

    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="input-group mb-3">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          pattern={pattern}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
      </div>

      <img src={value} alt="..." className="img-thumbnail" />
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
