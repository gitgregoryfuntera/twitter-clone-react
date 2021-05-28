import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import "./CreateTweetModal.css";
import { useDispatch, useSelector } from "react-redux";
import { createTweetStateActions } from "../../redux/store/store";

const CreateTweetModal = () => {
  const isCreateTweetModalOpen = useSelector(
    (state) => state.isCreateTweetModalOpen
  );
  const { TOGGLE_CREATE_TWEET_MODAL } = createTweetStateActions;
  const dispatch = useDispatch();

  return (
    <>
      {ReactDOM.createPortal(
        <Modal
          animation={false}
          show={isCreateTweetModalOpen}
          dialogClassName="create-tweet-modal m-auto"
        >
          <Modal.Header>
            <button
              className="btn"
              onClick={() => dispatch({ type: TOGGLE_CREATE_TWEET_MODAL })}
            >
              <ArrowLeft />
            </button>

            <button className="btn btn-primary">Tweet</button>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>,
        document.getElementById("root-modal")|| document.createElement('div')
      )}
    </>
  );
};

export default CreateTweetModal;
