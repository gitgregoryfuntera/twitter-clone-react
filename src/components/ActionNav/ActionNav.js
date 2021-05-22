import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import {
  HouseDoorFill,
  Search,
  Bell,
  Envelope,
  Person,
  ThreeDots
} from "react-bootstrap-icons";
import { useMediaQuery } from "react-responsive";
import ProfileAvatar from "../Profile/ProfileAvatar";
import avatar from "../../assets/profile.png";
import "./ActionNav.css";

const ActionNav = () => {
  const isDesktopScreen = useMediaQuery({ query: "(max-device-width: 500px)" });
  return (
    <Card className="actions-card">
      <Card.Body>
        <div className="actions">
          <ListGroup
            horizontal={isDesktopScreen ? true : false}
            variant="flush"
            className="actions-container"
          >
            <ListGroup.Item className="actions-icon btn ml-2 mr-2">
              <HouseDoorFill />
            </ListGroup.Item>
            <ListGroup.Item className="actions-icon btn ml-2 mr-2">
              <Search />
            </ListGroup.Item>
            <ListGroup.Item className="actions-icon btn ml-2 mr-2">
              <Bell />
            </ListGroup.Item>
            <ListGroup.Item className="actions-icon btn ml-2 mr-2">
              <Envelope />
            </ListGroup.Item>

            {!isDesktopScreen && (
              <ListGroup.Item className="actions-icon btn ml-2 mr-2">
                <Person />
              </ListGroup.Item>
            )}

            {!isDesktopScreen && (
              <ListGroup.Item className="actions-icon btn ml-2 mr-2">
                <ThreeDots />
              </ListGroup.Item>
            )}

            {!isDesktopScreen && (
              <ListGroup.Item className="actions-icon btn list-group-item m-0 p-2">
                <ProfileAvatar className="avatar-action" avatar={avatar}/>
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActionNav;
