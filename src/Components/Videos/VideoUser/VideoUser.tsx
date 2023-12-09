import  {FC} from 'react';
import styles from "./videoUser.module.css"
import {Link} from "react-router-dom";
import {IVideoUser} from "./IVideoUser";

const VideoUser: FC<IVideoUser> = ({avatar, nickname, uniqueId}) => {
    return (
        <Link to={`/user/${uniqueId}`} className={styles.postAvtor}>
            <div className={styles.postAvtorImage} style={{backgroundImage: `url(${avatar})`}}/>
            <div className={styles.userInfo}>
                <p className={styles.name}>{nickname}</p>
                <p className={styles.unId}>{uniqueId}</p>
            </div>
        </Link>
    );
}
export default VideoUser;