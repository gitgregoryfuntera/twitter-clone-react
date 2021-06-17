import React from "react";
import { ListGroupItem } from "react-bootstrap";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import avatar from "../../../assets/profile.png";
import styles from "./ChatBoxListItem.module.css";
const ChatBoxListItem = () => {
  return (
    <>
      <ListGroupItem>
        <div className={`${styles["list-item-container"]}`}>
          <div className="list-avatar">
            <ProfileAvatar avatar={avatar} />
          </div>
          <div className="list-username">
            <p className="font-weight-bold ml-1">
              Hello World{" "}
              <span className={`${styles["username-container"]} font-weight-normal`}>
                Hello
              </span>{" "}
              <span className={`${styles["date-container"]} font-weight-normal`}>
                Dec. 21, 2021
              </span>
            </p>
          </div>
        </div>
      </ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </>
  );
};

export default ChatBoxListItem;
