import React, { useState } from "react";
import { ChatBoxContainer } from "./ChatBox.style";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Transition } from "react-transition-group";

const defaultStyle = {
  transition: "min-height 0.2s ease-in",
  minHeight: "0",
  overflow: "auto",
};

const transitionStyles = {
  entering: { minHeight: "0" },
  entered: { maxHeight: "25vh", minHeight: "25vh" },
  exiting: { maxHeight: "0", minHeight: "0" },
  exited: { maxHeight: "0", minHeight: "0" },
};

const ChatBox = () => {
  const [toggleChatBox, setToggleChatBox] = useState(false);
  return (
    <ChatBoxContainer>
      <Card.Body onClick={() => setToggleChatBox((prevState) => !prevState)}>
        <Card.Title>Messages</Card.Title>
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
