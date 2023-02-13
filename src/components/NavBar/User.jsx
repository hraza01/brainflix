import React from 'react';
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import "./_NavBar.scss"

const User = () => {
  return (
      <img className="nav__avatar" src={UserImage} alt="user-image"/>
  );
};

export default User;
