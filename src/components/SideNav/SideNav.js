import React from 'react'
import SearchTweet from './SearchTweet/SearchTweet'
import styles from './SideNav.module.css';
import { Card } from "react-bootstrap";
const SideNav = () => {
    return (
        <Card className={styles['sidenav-container']}>
            <SearchTweet />
        </Card>
    )
}

export default SideNav
