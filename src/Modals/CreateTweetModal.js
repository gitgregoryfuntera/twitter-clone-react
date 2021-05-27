import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./CreateTweetModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createTweetStateActions } from "../redux/store/store";

const CreateTweetModal = () => {
  const isCreateTweetModalOpen = useSelector(
    (state) => state.isCreateTweetModalOpen
  );
  const { TOGGLE_CREATE_TWEET_MODAL } = createTweetStateActions;
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        animation={false}
        show={isCreateTweetModalOpen}
        onHide={() => dispatch({ type: TOGGLE_CREATE_TWEET_MODAL })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateTweetModal;
