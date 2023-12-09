import  {FC} from 'react';
import {IVideoUserItem} from "./IVideoUserItem";
import Video from "../Video";
import styles from "./videoUserItem.module.css"
import {PlayArrow} from "@mui/icons-material";
import {formatNum} from "../../../utils/complementary";

const VideoUserItem: FC<IVideoUserItem> = ({video_id, play_count, play, title}) => {
    return (
        <div className={styles.wrapper}>
            <Video width={"380px"} videoId={video_id} url={play}/>
            <div className={styles.videoPlayCount}>
                <PlayArrow/>
                <span>{formatNum(play_count)}</span>
            </div>
            <div className={styles.videoTitle}>
                {title}
            </div>
        </div>
    );
}
export default VideoUserItem;