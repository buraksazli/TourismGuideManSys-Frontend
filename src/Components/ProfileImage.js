import React from "react";
import '../App.css'
const ProfileImage = ({ name }) => {
  
  const firstLetter = name[0];

  return (
    <span className="user-profile-image text-uppercase">
      {firstLetter}
    </span>
  );
};
export default ProfileImage;
