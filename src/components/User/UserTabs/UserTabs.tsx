import React, {useState} from 'react';
import {USER_TABS} from "../../utils/constants";
import styles from "./User.css";
import {IUserTabs} from "./IUserTabs";
import {BsLock} from "react-icons/bs";
import {Alert} from "@mui/material";

const UserTabs: React.FC<IUserTabs> = ({openFavorite}) => {
    const [activeTab, setActiveTab] = useState(USER_TABS[0])
    return (
        <div className={styles.userTabs}>
            <ul className={styles.userTabsItem}>
                {USER_TABS.map((tab,index) => {
                    const {slug, title} = tab
                    return (
                        <li key={index} onClick={() => setActiveTab(tab)}
                            className={`${styles.userTabActive} ${activeTab.slug === slug ? "active" : ""}`}>
                            {!openFavorite && slug === "liked" && <BsLock/>}
                            <span>{title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.userTabsContent}>{!openFavorite && activeTab.slug === "liked" ?
                <Alert severity={"warning"}>This users liked videos are private</Alert> : activeTab.content}</div>
        </div>
    );
}

export default UserTabs;