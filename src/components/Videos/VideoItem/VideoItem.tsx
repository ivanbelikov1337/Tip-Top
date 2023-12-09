import React from 'react';
import {IVideoItem} from "./IVideoItem";
import VideoUser from "./VideoUser";
import Video from "./Video";
import styles from "./Video.module.css"
const VideoItem: React.FC<IVideoItem> = ({video_id: videoId, author: {avatar, nickname}, title, play}) => {
    return (
        <div className={styles.wrapper}>
            <VideoUser uniqueId={videoId} nickname={nickname} avatar={avatar}/>
            <Video videoId={videoId} url={play}/>
            <p>{title}</p>
        </div>
    );
}

export default VideoItem;