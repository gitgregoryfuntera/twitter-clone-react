import React from "react";
import ReactDOM from 'react-dom'
import TweetList from "../../components/TweetList/TweetList";
import CreateTweetModal from "../../Modals/CreateTweetModal";

const Tweet = () => {
  return (
    <>
      <TweetList />

      {ReactDOM.createPortal(
          <CreateTweetModal />,
        document.getElementById("root-modal")
      )}
    
    </>
  );
};

export default Tweet;
