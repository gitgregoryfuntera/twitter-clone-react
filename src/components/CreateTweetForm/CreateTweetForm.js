import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ProfileAvatar from '../Profile/ProfileAvatar';
import { Globe2 } from "react-bootstrap-icons";
const MAX_TEXT_LENGTH = 300;

const CreateTweetForm = (props) => {
  const {
    currentUser,
    tweet,
    writeTweetHandler,
    textAreaHeight,
    isSmallScreen,
    textProgress,
  } = props;


  return (
    <div className="create-tweet-container">
      <div className="avatar-container">
        {currentUser?.picture && (
          <ProfileAvatar avatar={currentUser.picture.large} />
        )}
      </div>

      <div className="write-tweet-container pl-3">
        <textarea
          data-testid="tweet-form-textarea"
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
    </div>
  );
};

export default CreateTweetForm;
