import React, { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const TweetContent = () => {
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getRandomTweet = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://baconipsum.com/api/?type=all-meat&sentences=${
          Math.floor(Math.random() * 3) + 1
        }&start-with-lorem=1`
      );
      // console.log(response);
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

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setTweet(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getRandomTweet();
  }, [getRandomTweet]);

  return <p>{isLoading ? <Skeleton /> : tweet}</p>;
};

export default TweetContent;
