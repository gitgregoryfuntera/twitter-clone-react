import React from 'react'
import { BrushFill } from "react-bootstrap-icons";
import styles from "./CreateTweetWidget.module.css";

const CreateTweetWidget = (props) => {
    return (
        <div className={`${props.className} rounded-circle`}>
            <BrushFill className={styles['widget-icon']}/>
        </div>
    )
}

export default CreateTweetWidget
