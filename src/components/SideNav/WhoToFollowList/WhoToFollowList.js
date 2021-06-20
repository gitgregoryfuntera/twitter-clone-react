import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup, Spinner } from "react-bootstrap";
import ProfileAvatar from "../../Profile/ProfileAvatar";
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
      const { results } = response.data;
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

  let content = (
    <ListGroup.Item className="text-center">
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </ListGroup.Item>
  );

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
      <Card.Header><h4>Who to follow</h4></Card.Header>
      {content}
      <Card.Header>
        <button className="btn btn-primary">Show More</button>
      </Card.Header>
    </Card>
  );
};

export default WhoToFollowList;
