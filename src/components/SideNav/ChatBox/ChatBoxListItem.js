import React, { useCallback, useEffect, useState } from "react";
import { ListGroupItem, Spinner, ListGroup } from "react-bootstrap";
import ProfileAvatar from "../../Profile/ProfileAvatar";
import styles from "./ChatBoxListItem.module.css";
import axios from "axios";
const ChatBoxListItem = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=5&page=1`
      );
      const { data } = response;
      setUsers(data.results);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  let content = (
    <ListGroupItem className={`${styles["spinner-container"]} text-center`}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </ListGroupItem>
  );

  if (!isLoading) {
    content = (
      <>
        {users.map(({ name, picture, login }) => (
          <ListGroupItem>
            <div className={`${styles["list-item-container"]}`}>
              <div className="list-avatar">
                <ProfileAvatar avatar={picture.large} />
              </div>
              <div className="list-username">
                <p
                  className={`${styles["firstname-container"]} font-weight-bold ml-1 mb-0`}
                >
                  {name.first}{" "}
                  <span
                    className={`${styles["username-container"]} font-weight-normal`}
                  >
                    {login.username}
                  </span>{" "}
                  <span
                    className={`${styles["date-container"]} font-weight-normal`}
                  >
                    Dec. 21, 2021
                  </span>
                </p>
                <p className="chat-text ml-1">123</p>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </>
    );
  }

  return <>{content}</>;
};

export default ChatBoxListItem;
