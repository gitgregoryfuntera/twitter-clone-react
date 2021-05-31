import React from "react";
import { BrushFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/store/modal/modalSlice";
import styles from "./CreateTweetWidget.module.css";

const CreateTweetWidget = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`${props.className} rounded-circle`}
      onClick={() => dispatch(toggle())}
      data-testid="create-tweet-widget-button"
    >
      <BrushFill className={styles["widget-icon"]} />
    </div>
  );
};

export default CreateTweetWidget;
