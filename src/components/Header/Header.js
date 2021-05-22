import React from "react";
import { Card } from "react-bootstrap";
import ProfileAvatar from "../Profile/ProfileAvatar";
import { Stars } from "react-bootstrap-icons";
import styles from "./Header.module.css";
import avatar from "../../assets/profile.png";


const Header = () => {
  return (
    <div className={`${styles["header"]}`}>
      <Card className={`${styles["header-card"]}`}>
        <Card.Body>
          <div className={`d-flex`}>
            <span className={`${styles["header-avatar"]}`}>
              <ProfileAvatar className={styles["avatar"]} avatar={avatar}/>
            </span>

            <h3
              className={`p-0 m-0 position-relative font-weight-bold ${styles["header-home-label"]}`}
            >
              Home
            </h3>
            <span className={`${styles["top-tweets"]}`}>
              <Stars />
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
