import React from "react";
import { BrushFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { createTweetStateActions } from "../../redux/store/store";
import styles from "./CreateTweetWidget.module.css";

const CreateTweetWidget = (props) => {
  const dispatch = useDispatch();
  const { TOGGLE_CREATE_TWEET_MODAL } = createTweetStateActions;
  return (
    <div
      className={`${props.className} rounded-circle`}
      onClick={() => dispatch({ type: TOGGLE_CREATE_TWEET_MODAL })}
      data-testid="create-tweet-widget-button"
    >
      <BrushFill className={styles["widget-icon"]} />
    </div>
  );
};

export default CreateTweetWidget;
