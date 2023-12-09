import {FC} from 'react';
import styles from "./userBordInfo.module.css"
import {formatNum} from "../../../utils/complementary";
import {IUserBordInfo} from "./IUserBordInfo";

const UserBordInfo: FC<IUserBordInfo> = ({
                                             nickname, uniqueId, followingCount,
                                             followerCount, heartCount, videoCount,
                                             setClose, setCloseFollowing, setCloseFollower
                                         }) => {
    return (
        <>
            <div className={styles.userNickname}>
                {nickname}
            </div>
            <div className={styles.userUnique}>
                @{uniqueId}
            </div>
            <ul className={styles.userStats}>
                <li onClick={() => setClose(true)} className={styles.userBord}>
                    <span>{formatNum(followingCount)}</span>
                    <p>Following</p>
                </li>
                <li onClick={() => setClose(true)} className={styles.userBord}>
                    <span>{formatNum(followerCount)}</span>
                    <p>Followers</p>
                </li>
                <li className={styles.userBord}>
                    <span>{formatNum(heartCount)}</span>
                    <p>Likes</p>
                </li>
                <li className={styles.userBord}>
                    <span>{formatNum(videoCount)}</span>
                    <p>Videos</p>
                </li>
            </ul>
        </>
    )
}

export default UserBordInfo;