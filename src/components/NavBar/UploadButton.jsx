import React from 'react';
import UploadIcon from "../../assets/icons/upload.svg";
import "./_NavBar.scss"

const UploadButton = () => {
  return (
    <div className="nav__btn-container">
      <button className="btn nav__btn">
        <img className="nav__btn-logo" src={UploadIcon} alt="search-logo"/>
        <span className="nav__btn-text">upload</span>
      </button>
    </div>
  );
};

export default UploadButton;
