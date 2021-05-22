import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const TweetContent = () => {
  const [tweet, setTweet] = useState("");

  const getRandomTweet = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&sentences=${
          Math.floor(Math.random() * 3) + 1
        }&start-with-lorem=1`
      );
      console.log(response);
      if (Array.isArray(response.data)) {
        let mergedTweets = response.data.reduce(
          (initialValue, currentValue) => {
            return initialValue.concat(currentValue);
          }
        );
        setTweet(mergedTweets);
      } else {
        throw "Something went wrong fetching the tweet.";
      }
    } catch (error) {
      console.log(error);
      setTweet(error);
    }
  }, []);

  useEffect(() => {
    getRandomTweet();
  }, [getRandomTweet]);

  return <p>{tweet}</p>;
};

export default TweetContent;
