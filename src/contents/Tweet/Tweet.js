import React from "react";
import TweetList from "../../components/TweetList/TweetList";
import CreateTweetModal from "../../Modals/CreateTweetModal/CreateTweetModal";

const Tweet = () => {
  return (
    <>
      <TweetList />
      <CreateTweetModal />
    </>
  );
};

export default Tweet;
