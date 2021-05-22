import React from "react";
import ProfileAvatar from "../Profile/ProfileAvatar";
import styles from "./TweetCard.module.css";

import TweetContent from "./TweetContent";

const TweetCard = (props) => {
  const { data } = props;
  return (
    <div className={`tweet-item`}>
      <div className={`user w-100`}>
        <div className={`container-fluid`}>
          <div className={`row`}>
            <div className={`col-3 col-md-2 col-lg-1 m-0 p-0`}>
              <ProfileAvatar className={`${styles['avatar-icon']}`} avatar={data.picture.large}/>
            </div>
            <div className={`col-9 col-md-10 m-0 p-0 text-left pl-2`}>
              <div className={`user-info d-inline-flex`}>
                <h5 className={`m-0 p-0`}>{data.name.first}</h5>
                <p className={`m-0 p-0`}>@{data.login.username}</p>
              </div>
              <div className={`user-tweet`}>
                <TweetContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
