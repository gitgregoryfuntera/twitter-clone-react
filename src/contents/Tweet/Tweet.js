import React from "react";
import TweetList from "../../components/TweetList/TweetList";
import CreateTweetModal from "../../Modals/CreateTweetModal/CreateTweetModal";
import { useMediaQuery } from "react-responsive";

const Tweet = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 500px)" });
  return (
    <>
      <TweetList isMobileScreen={isMobileScreen}/>
      <CreateTweetModal />
    </>
  );
};

export default Tweet;