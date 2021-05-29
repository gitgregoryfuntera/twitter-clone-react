import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import "./CreateTweetModal.css";
import { useDispatch, useSelector } from "react-redux";
import { createTweetStateActions } from "../../redux/store/store";
import ProfileAvatar from "../../components/Profile/ProfileAvatar";
import avatar from "../../assets/profile.png";

const CreateTweetModal = () => {
  const isCreateTweetModalOpen = useSelector(
    (state) => state.isCreateTweetModalOpen
  );
  const { TOGGLE_CREATE_TWEET_MODAL } = createTweetStateActions;
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState(5);

  const writeTweetHandler = (e) => {
    let length = e.target.value
      .substr(0, e.target.selectionStart)
      .split("\n").length;
    let textAreaHeight = length;
    console.log(textAreaHeight);
    let tempLength = length * 1.5;
    if (length < 30) {
      textAreaHeight = tempLength;
    }
    setTweet(e.target.value);
    setTextAreaHeight(textAreaHeight);
  };


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
          <Modal.Body>
            <div className="create-tweet-container">
              <div className="avatar-container">
                <ProfileAvatar avatar={avatar} />
              </div>

              <div className="write-tweet-container">
                <textarea
                  className="w-100 pl-1"
                  value={tweet}
                  onChange={writeTweetHandler}
                  style={{
                    height: `${textAreaHeight}em`,
                  }}
                ></textarea>
                <div className="everyone-see-toggle"></div>
              </div>
            </div>
          </Modal.Body>
        </Modal>,
        document.getElementById("root-modal") || document.createElement("div")
      )}
    </>
  );
};

export default CreateTweetModal;
