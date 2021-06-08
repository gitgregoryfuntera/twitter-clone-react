import React from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { Card, ListGroup } from "react-bootstrap";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import avatarProfile from "../../../assets/profile.png";
import { Grid } from "./WhoToFollowList.style";
const WhoToFollowList = () => {
  return (
    <Card className="mt-3">
      <Card.Header>Who To Follow</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Grid>
            <div className="avatar-container">
              <ProfileAvatar avatar={avatarProfile} />
            </div>

            <div className="who-to-follow-details">
              <h5 className="m-0 p-0">#HelloWorld</h5>
              <h6 className="m-0 p-0">#HelloWorld</h6>
            </div>

            <div className="who-to-follow-btn">
              <button className="btn btn-primary">Follow</button>
            </div>
          </Grid>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WhoToFollowList;
