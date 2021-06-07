import React from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { Card, ListGroup } from "react-bootstrap";


const WhoToFollowList = () => {
  return (
    <Card className="mt-3">
      <Card.Header>Trends For You</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
            asd
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#HelloWorld</h5>
          </div>
          <div className="trend-tweets-count">
            asd
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default WhoToFollowList;
