import React from "react";
import "./ProfileAvatar.css";

const ProfileAvatar = (props) => {
  const { className, avatar } = props;
  return (
    <div className={className}>
      <img src={avatar} className="rounded-circle" alt="profile image"/>
    </div>
  );
};

export default ProfileAvatar;
