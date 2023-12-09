import {FC, useState} from 'react';
import {useParams} from "react-router-dom";
import {useUser} from "../../hook/useUser";
import {Alert, CircularProgress} from "@mui/material";
import styles from "./user.module.css"
import {BsLock} from "react-icons/bs";
import UserTabs from "./UserTabs/UserTabs";
import UserBordInfo from "./UserBordInfo/UserBordInfo";
import UserSocialMedia from "./UserSocialMedia/UserSocialMedia";
import {QuizParams} from "../../utils/IComplementary";
import UserFollow from "./UserFollow/UserFollow";
import {Close} from "@mui/icons-material";


const User: FC = () => {
    const {id: uniqueId} = useParams() as QuizParams
    const [close, setClose] = useState(false)
    const [closeFollower, setCloseFollower] = useState(false)
    const [closeFollowing, setCloseFollowing] = useState(false)
    const {
        data: {user, stats}, isLoading, error, code
    } = useUser(uniqueId)

    if (code === -1) return <Alert severity={"error"}>{error || "User not founded"}</Alert>
    if (isLoading) return <div className={styles.circularProgress}><CircularProgress/></div>
    
    return (
        <div className={styles.user}>
            <div className={styles.userTop}>
                <div className={styles.userAvatar} style={{backgroundImage: `url(${user.avatarMedium})`}}/>
                <div className={styles.userinfo}>
                    <UserBordInfo nickname={user.nickname} uniqueId={uniqueId}
                                  followingCount={stats.followingCount}
                                  setCloseFollowing={setCloseFollowing}
                                  followerCount={stats.followerCount}
                                  setCloseFollower={setCloseFollower}
                                  heartCount={stats.heartCount}
                                  videoCount={stats.videoCount}
                                  setClose={setClose}
                    />
                    <UserSocialMedia youtube_channel_id={user.youtube_channel_id}
                                     twitter_id={user.twitter_id}
                                     ins_id={user.ins_id}
                    />
                </div>
                {close && (
                    <div className={styles.showMore}>
                        <UserFollow id={uniqueId} closeFollower={closeFollower} closeFollowing={closeFollowing}/>
                        <Close className={styles.closeModal} onClick={() => setClose(false)}/>
                    </div>
                )}
            </div>
            {!user.privateAccount ? <UserTabs openFavorite={user.openFavorite}/> : (
                <div>
                    <span>This account is private</span>
                    <BsLock/>
                </div>
            )}
        </div>
    )
}
export default User;