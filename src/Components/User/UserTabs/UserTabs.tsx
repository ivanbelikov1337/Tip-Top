import {FC, useState} from 'react';
import {USER_TABS} from "../../../utils/constants";
import styles from "./userTabs.module.css";
import {BsLock} from "react-icons/bs";
import {Alert} from "@mui/material";
import {IUserTabs} from "./IUserTabs";

const UserTabs: FC<IUserTabs> = ({openFavorite}) => {
    const [activeTab, setActiveTab] = useState(USER_TABS[0])
    return (
        <div className={styles.userTabs}>
            <ul className={styles.userTabsItem}>
                {USER_TABS.map((tab, index) => {
                    const {slug, title} = tab
                    return (
                        <li key={index} onClick={() => setActiveTab(tab)}
                            className={`${activeTab.slug === slug && styles.active}`}>
                            {!openFavorite && slug === "liked" && <BsLock/>}
                            <span>{title}</span>
                        </li>
                    )
                })}
            </ul>
            {!openFavorite && activeTab.slug === "liked" ?
                <Alert severity={"warning"}>This users liked videos are private</Alert> : activeTab.content}
        </div>
    );
}

export default UserTabs;