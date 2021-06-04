import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { ArrowLeft, Globe2, XLg } from "react-bootstrap-icons";
import "./CreateTweetModal.css";
import { useDispatch, useSelector } from "react-redux";
import ProfileAvatar from "../../components/Profile/ProfileAvatar";
import { useMediaQuery } from "react-responsive";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toggle } from "../../redux/store/modal/modalSlice";
import CreateTweetForm from "../../components/CreateTweetForm/CreateTweetForm";

const MAX_TEXT_LENGTH = 300;
const CreateTweetModal = () => {
  const isCreateTweetModalOpen = useSelector(
    (state) => state.modal.isCreateTweetModalOpen
  );
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState(2);
  const [textProgress, setTextProgress] = useState(0);
  const isSmallScreen = useMediaQuery({ query: "(max-device-width: 700px)" });

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
    const textProgressPercentage =
      (e.target.value.length / MAX_TEXT_LENGTH) * 100;
    setTextProgress(textProgressPercentage);
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
            <button className="btn" onClick={() => dispatch(toggle())}>
              {isSmallScreen ? <ArrowLeft /> : <XLg />}
            </button>
            {isSmallScreen && (
              <button
                disabled={!tweet.trim("").length}
                className="btn btn-primary"
              >
                Tweet
              </button>
            )}
          </Modal.Header>
          <Modal.Body>

            <CreateTweetForm 
              currentUser={currentUser}
              tweet={tweet}
              writeTweetHandler={writeTweetHandler}
              textAreaHeight={textAreaHeight}
              isSmallScreen={isSmallScreen}
              textProgress={textProgress}
            />


            
            {/* <div className="create-tweet-container">
              <div className="avatar-container">
                { currentUser?.picture && <ProfileAvatar avatar={currentUser.picture.large} />}
                
              </div>

              <div className="write-tweet-container pl-3">
                <textarea
                  role="textbox"
                  placeholder="What's happening?"
                  maxLength={MAX_TEXT_LENGTH}
                  className="w-100 pl-1"
                  value={tweet}
                  onChange={writeTweetHandler}
                  style={{
                    height: `${textAreaHeight}em`,
                  }}
                ></textarea>
                <div className="everyone-see-toggle pt-3">
                  <h6 className="text-primary">
                    <span className="globe-icon">
                      <Globe2 />
                    </span>{" "}
                    Everyone can reply
                  </h6>
                </div>
                {isSmallScreen && (
                  <div className="text-progressbar">
                    <CircularProgressbar value={textProgress} />
                  </div>
                )}
              </div>
            </div> */}



          </Modal.Body>
          <Modal.Footer>
            {!isSmallScreen && (
              <div className="text-progressbar">
                <CircularProgressbar value={textProgress} />
              </div>
            )}
            {!isSmallScreen && (
              <button
                disabled={!tweet.trim("").length}
                className="btn btn-primary"
              >
                Tweet
              </button>
            )}
          </Modal.Footer>
        </Modal>,
        document.getElementById("root-modal") || document.createElement("div")
      )}
    </>
  );
};

export default CreateTweetModal;
