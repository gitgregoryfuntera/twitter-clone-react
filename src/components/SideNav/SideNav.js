import React from 'react'
import SearchTweet from './SearchTweet/SearchTweet'
import styles from './SideNav.module.css';
import { Card } from "react-bootstrap";
import TrendsList from './TrendsList/TrendsList';
const SideNav = () => {
    return (
        <Card className={styles['sidenav-container']}>
            <SearchTweet />
            <TrendsList />
        </Card>
    )
}

export default SideNav
