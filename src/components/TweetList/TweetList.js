import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import CreateTweetWidget from "../CreateTweetWidget/CreateTweetWidget";
import TweetCard from "./TweetCard";
import styles from "./TweetList.module.css";

const TweetList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const isMobileScreen = useMediaQuery({ query: "(max-device-width: 500px)" });

  const observer = useRef();

  const lastElement = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }

      observer.current = new IntersectionObserver((entries) => {
        // console.log(entries);
        if (entries[0].isIntersecting === true) {
          setPage((prevState) => prevState + 1);
          setIsLoading(true);

          // Debounce to 800 to prevent
          setTimeout(() => {
            onGetUsers();
          }, 800);
        }
      });

      if (node) {
        return observer.current.observe(node);
      }
    },
    [isLoading]
  );

  const onGetUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=10&page=${page.toString()}`
      );
      const data = response.data.results;
      setUsers((prevState) => [...prevState, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    onGetUsers();
  }, [onGetUsers]);

  let content = (
    <ListGroup.Item>
      <p>No Tweets found</p>
    </ListGroup.Item>
  );

  if (users.length !== 0) {
    content = users.map((value, index) => {
      if (index === users.length - 1) {
        return (
          <>
            <ListGroup.Item ref={lastElement} key={value.email}>
              <TweetCard data={value} />
            </ListGroup.Item>
          </>
        );
      }
      return (
        <ListGroup.Item key={value.email}>
          <TweetCard data={value} />
        </ListGroup.Item>
      );
    });
  }

  if (isLoading && users.length === 0) {
    content = (
      <ListGroup.Item className={`text-center`}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </ListGroup.Item>
    );
  }

  let infiniteLoaderSpinner = isLoading && users.length !== 0 && (
    <ListGroup.Item className={`text-center`}>
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        key={"loaderId"}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </ListGroup.Item>
  );

  return (
    <ListGroup className={`${styles["tweet-list"]}`}>
      {content}
      {infiniteLoaderSpinner}
      {isMobileScreen && (
        <CreateTweetWidget className={styles["tweet-widget-container"]} />
      )}
    </ListGroup>
  );
};

export default TweetList;
