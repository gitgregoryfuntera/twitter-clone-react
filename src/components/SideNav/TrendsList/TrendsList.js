import React from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { Card, ListGroup } from "react-bootstrap";
import { TrendLocationLabel, TrendMoreIconBtn } from "./TrendList.style";

const TrendsList = () => {
  return (
    <Card className="mt-3">
      <Card.Header>Trends For You</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>Trending in Philippines</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#HelloWorld</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>1087 Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>Trending in Philippines</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#HelloWorld</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>1087 Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>Trending in Philippines</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#HelloWorld</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>1087 Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default TrendsList;
