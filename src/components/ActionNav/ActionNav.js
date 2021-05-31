import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  HouseDoorFill,
  Search,
  Bell,
  Envelope,
  Person,
  ThreeDots,
} from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";
import ProfileAvatar from "../Profile/ProfileAvatar";
import avatar from "../../assets/profile.png";
import styles from "./ActionNav.module.css";
import CreateTweetWidget from "../CreateTweetWidget/CreateTweetWidget";
import { useSelector } from "react-redux";

const ActionNav = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 500px)" });
  return (
    <Card className={styles["actions-card"]}>
      <Card.Body>
        <div className={`actions`}>
          <ListGroup
            horizontal={isMobileScreen ? true : false}
            variant="flush"
            className={styles["actions-container"]}
          >
            <ListGroup.Item
              className={`${styles["actions-icon"]} btn ml-2 mr-2 sm-p-1`}
            >
              <HouseDoorFill className={styles["specific-icon"]} />
            </ListGroup.Item>
            <ListGroup.Item
              className={`${styles["actions-icon"]} btn ml-2 mr-2 sm-p-1`}
            >
              <Search className={styles["specific-icon"]} />
            </ListGroup.Item>
            <ListGroup.Item
              className={`${styles["actions-icon"]} btn ml-2 mr-2 sm-p-1`}
            >
              <Bell className={styles["specific-icon"]} />
            </ListGroup.Item>
            <ListGroup.Item
              className={`${styles["actions-icon"]} btn ml-2 mr-2 sm-p-1`}
            >
              <Envelope className={styles["specific-icon"]} />
            </ListGroup.Item>

            {!isMobileScreen && (
              <ListGroup.Item
                className={`${styles["actions-icon"]} btn ml-2 mr-2 p-1`}
              >
                <Person className={styles["specific-icon"]} />
              </ListGroup.Item>
            )}

            {!isMobileScreen && (
              <ListGroup.Item
                className={`${styles["actions-icon"]} btn ml-2 mr-2 p-1`}
              >
                <ThreeDots className={styles["specific-icon"]} />
              </ListGroup.Item>
            )}

            {!isMobileScreen && (
              <ListGroup.Item
                className={`${styles["actions-icon"]} btn m-0 p-2`}
              >
                <CreateTweetWidget
                  className={styles["tweet-widget-container"]}
                />
              </ListGroup.Item>
            )}

            {!isMobileScreen && (
              <ListGroup.Item
                className={`${styles["actions-icon"]} btn m-0 p-2`}
              >
                {currentUser?.picture && (
                  <ProfileAvatar
                    className={styles["avatar-action"]}
                    avatar={currentUser.picture.large}
                  />
                )}
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActionNav;
