import React from "react";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import styles from "./TweetCard.module.css";

import TweetContent from "./TweetContent";

const TweetCard = (props) => {
  const { data } = props;
  return (
    <div className={styles['card-grid']}>
      <div>
        <ProfileAvatar
          className={`${styles["avatar-icon"]}`}
          avatar={data.picture.large}
        />
      </div>

      <div className="pl-2">
        <div className={`user-info d-inline-flex`}>
          <h5 className={`m-0 p-0`}>{data.name.first}</h5>
          <p className={`m-0 p-0`}>@{data.login.username}</p>
        </div>
        <div className="pr-3">
          <TweetContent />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
