import React, { useState } from "react";
import { ChatBoxContainer } from "./ChatBox.style";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Transition } from "react-transition-group";
import { CaretUp } from "react-bootstrap-icons";

const defaultStyle = {
  transition: "all 0.3s ease 0s",
  minHeight: "0",
  overflow: "auto",
};

const transitionStyles = {
  entering: { height: "40vh" },
  entered: { height: "40vh" },
  exiting: { height: "0" },
  exited: { height: "0" },
};

const ChatBox = () => {
  const [toggleChatBox, setToggleChatBox] = useState(false);
  return (
    <ChatBoxContainer>
      <Card.Body onClick={() => setToggleChatBox((prevState) => !prevState)}>
        <Card.Title>
          Messages
          <span>
            <CaretUp />
          </span>
        </Card.Title>
      </Card.Body>
      <Transition in={toggleChatBox} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <ListGroup
            className="list-group-flush"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        )}
      </Transition>
    </ChatBoxContainer>
  );
};

export default ChatBox;
