import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ProfileAvatar from "../Profile/ProfileAvatar";
import { Stars } from "react-bootstrap-icons";
import styles from "./Header.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../redux/store/user/userSlice";
import Switch from "react-switch";

const Header = () => {
  const [currentUser, setCurrentUser] = useState();
  const dispatch = useDispatch();

  const fetchCurrentUser = useCallback(async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://randomuser.me/api/`);
      if (results.length) {
        setCurrentUser(results[0]);
        dispatch(updateCurrentUser(results[0]));
      } else {
        throw new Error("Something went wrong here...");
      }
    } catch (e) {
      /**
       * TODO: Add error handlers for avatar images
       */
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <div className={`${styles["header"]}`}>
      <Card className={`${styles["header-card"]}`}>
        <Card.Body>
          <div className={`d-flex`}>
            <span className={`${styles["header-avatar"]}`}>
              {currentUser && (
                <ProfileAvatar
                  className={styles["avatar"]}
                  avatar={currentUser.picture.large}
                />
              )}
            </span>

            <h3
              className={`p-0 m-0 position-relative font-weight-bold ${styles["header-home-label"]}`}
            >
              Home
            </h3>
            <span className={`${styles["top-tweets"]}`}>
              <Switch 
                 uncheckedIcon={
                  <Stars />
                }
              />
              {/* <Stars /> */}
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
