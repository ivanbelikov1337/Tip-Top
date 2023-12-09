import React from 'react';
import {IVideoUserItem} from "./IVideoUserItem";
import Video from "./Video";
import styles from "./Video.module.css"
import {PlayArrow} from "@mui/icons-material";
import {formatNum} from "../../utils/complementary";
const VideoUserItem: React.FC<IVideoUserItem> = ({video_id, play_count, play, title}) => {
    return (
        <>
            <Video videoId={video_id} url={play}/>
            <div className={styles.videoPlayCount}>
                <PlayArrow/>
                <span>{formatNum(play_count)}</span>
            </div>
            <div className={styles.videoTitle}>
                {title}
            </div>
        </>
    );
}

export default VideoUserItem;