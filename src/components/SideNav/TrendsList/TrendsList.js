import React from "react";
import { ThreeDots } from "react-bootstrap-icons";
import { Card, ListGroup } from "react-bootstrap";
import { TrendLocationLabel, TrendMoreIconBtn } from "./TrendList.style";

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const TrendsList = () => {
  return (
    <Card className="mt-3">
      <Card.Header><h4>Trends for you</h4></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>{lorem.generateWords(3)}</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#{lorem.generateWords(1)}</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>{Math.floor(Math.random() * 5000) + 1000} Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>{lorem.generateWords(3)}</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#{lorem.generateWords(1)}</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>{Math.floor(Math.random() * 5000) + 1000} Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="trend-container">
            <div className="trend-location">
              <TrendLocationLabel>{lorem.generateWords(3)}</TrendLocationLabel>
              <TrendMoreIconBtn>
                <ThreeDots />
              </TrendMoreIconBtn>
            </div>
          </div>
          <div className="trend-title">
            <h5 className="m-0 p-0">#{lorem.generateWords(1)}</h5>
          </div>
          <div className="trend-tweets-count">
            <TrendLocationLabel>{Math.floor(Math.random() * 5000) + 1000} Tweets</TrendLocationLabel>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default TrendsList;
