import React from 'react'
import { BrushFill } from "react-bootstrap-icons";
import styles from "./CreateTweetWidget.module.css";

const CreateTweetWidget = () => {
    return (
        <div className={`${styles['tweet-widget-container']} rounded-circle`}>
            <BrushFill className={styles['widget-icon']}/>
        </div>
    )
}

export default CreateTweetWidget
