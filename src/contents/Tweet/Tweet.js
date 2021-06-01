import React from "react";
import TweetList from "../../components/TweetList/TweetList";
import CreateTweetModal from "../../Modals/CreateTweetModal/CreateTweetModal";
import { useMediaQuery } from "react-responsive";
import SideNav from "../../components/SideNav/SideNav";

const Tweet = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 500px)" });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1000px)' })
  return (
    <>
      <TweetList isMobileScreen={isMobileScreen}/>
      <CreateTweetModal />
      {isBigScreen && <SideNav />}
    </>
  );
};

export default Tweet;