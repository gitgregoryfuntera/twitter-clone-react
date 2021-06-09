import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import avatarProfile from "../../../assets/profile.png";
import { Grid } from "./WhoToFollowList.style";
import axios from "axios";
const WhoToFollowList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [whoToFollowList, setWhoToFollowList] = useState([]);
  const fetchWhoToFollow = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=3&page=1`
      );
      console.log(response);
      const { results } = response.data;
      console.log(results);
      setWhoToFollowList(results);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWhoToFollow();
  }, [fetchWhoToFollow]);

  let content = <div>Loading...</div>;

  if (!isLoading) {
    content = (
      <ListGroup variant="flush">
        <ListGroup.Item>
          {whoToFollowList.map((value) => (
            <Grid className="pb-2">
              <div className="avatar-container">
                <ProfileAvatar avatar={value.picture.large} />
              </div>

              <div className="who-to-follow-details pl-2">
                <h5 className="m-0 p-0">{value.name.first}</h5>
                <h6 className="m-0 p-0">@{value.login.username}</h6>
              </div>

              <div className="who-to-follow-btn text-right">
                <button className="btn btn-primary">Follow</button>
              </div>
            </Grid>
          ))}
        </ListGroup.Item>
      </ListGroup>
    );
  }

  return (
    <Card className="mt-3">
      <Card.Header>Who To Follow</Card.Header>
      {content}
      <Card.Header>
        <button className="btn btn-primary">Show More</button>
      </Card.Header>
    </Card>
  );
};

export default WhoToFollowList;
