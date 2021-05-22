import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import TweetCard from "./TweetCard";
import styles from "./TweetList.module.css";

const TweetList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onGetUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=10`);
      const data = response.data.results;
      setUsers(data);
      setIsLoading(false);
      console.log(data);

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
    content = users.map((value) => (
      <ListGroup.Item key={value.email}>
        <TweetCard data={value}/>
      </ListGroup.Item>
    ));
  }

  if (isLoading) {
    content = (
      <ListGroup.Item>
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </ListGroup.Item>
    );
  }

  return <ListGroup className={`${styles["tweet-list"]}`}>{content}</ListGroup>;
};

export default TweetList;
