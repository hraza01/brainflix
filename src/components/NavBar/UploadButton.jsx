import { Link } from 'react-router-dom';
import React from 'react';
import UploadIcon from '@/assets/icons/upload.svg';
import './_NavBar.scss';

function UploadButton() {
    return (
        <Link className="nav__btn-container" to="/upload-video">
            <button type="button" className="btn nav__btn">
                <img
                    className="nav__btn-logo"
                    src={UploadIcon}
                    alt="search-logo"
                />
                <span className="nav__btn-text">upload</span>
            </button>
        </Link>
    );
}

export default UploadButton;
