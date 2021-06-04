import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateTweetForm from "../../CreateTweetForm/CreateTweetForm";
const MAX_TEXT_LENGTH = 300;
const TweetListCreateForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [textAreaHeight, setTextAreaHeight] = useState(2);
  const [textProgress, setTextProgress] = useState(0);
  const [tweet, setTweet] = useState("");

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
      <CreateTweetForm
        currentUser={currentUser}
        tweet={tweet}
        writeTweetHandler={writeTweetHandler}
        textAreaHeight={textAreaHeight}
        textProgress={textProgress}
      />
    </>
  );
};

export default TweetListCreateForm;
