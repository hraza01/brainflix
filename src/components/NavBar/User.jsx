import React from 'react';
import UserImage from '../../assets/images/Mohan-muruge.jpg';
import './_NavBar.scss';

function User() {
  return <img className="nav__avatar" src={UserImage} alt="user-profile" />;
}

export default User;
