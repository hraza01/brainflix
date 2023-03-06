import React from 'react';
import SearchBar from './SearchBar';
import UploadButton from './UploadButton';
import User from './User';
import BrainflixLogo from '@/assets/logos/BrainFlix-logo.svg';
import './_NavBar.scss';

function NavBar() {
    return (
        <header className="nav">
            <nav className="nav__wrapper">
                <a className="nav__link" href="/">
                    <img
                        className="nav__logo"
                        src={BrainflixLogo}
                        alt="BrainFlix logo"
                    />
                </a>
                <SearchBar />
                <User />
                <UploadButton />
            </nav>
        </header>
    );
}

export default NavBar;
