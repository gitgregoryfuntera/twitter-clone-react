import React, { useState } from "react";
import { ChatBoxContainer, ToggleChatBoxIcon } from "./ChatBox.style";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Transition } from "react-transition-group";
import { CaretUpFill, CaretDownFill } from "react-bootstrap-icons";
import ChatBoxListItem from "./ChatBoxListItem";

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
          <ToggleChatBoxIcon>
            {toggleChatBox ? <CaretDownFill /> : <CaretUpFill />}
          </ToggleChatBoxIcon>
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
            <ChatBoxListItem />
          </ListGroup>
        )}
      </Transition>
    </ChatBoxContainer>
  );
};

export default ChatBox;
