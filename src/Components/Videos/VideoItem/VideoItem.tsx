
import {IVideoItem} from "./IVideoItem";
import VideoUser from "../VideoUser/VideoUser";
import Video from "../Video";
import styles from "./videoItem.module.css"
import {FC} from "react";


const VideoItem: FC<IVideoItem> = ({video_id: videoId, author: {avatar, unique_id, nickname}, title, play}) => {
    return (
            <div className={styles.wrapper}>
                <VideoUser uniqueId={unique_id} nickname={nickname} avatar={avatar}/>
                <Video  videoId={videoId} url={play} width={"380px"}/>
                <p className={styles.title}>{title}</p>
            </div>
    )
}

export default VideoItem;