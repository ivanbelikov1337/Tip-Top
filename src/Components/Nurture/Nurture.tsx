import  {FC} from 'react';
import {MusicNote} from "@mui/icons-material";
import {CircularProgress} from "@mui/material";
import {useNurture} from "../../hook/useNurture";
import styles from "./nurture.module.css"
import VideoUser from "../Videos/VideoUser/VideoUser";
import VideoDetails from "../Videos/VideoDetails/VideoDetails";
import Video from "../Videos/Video";

const Nurture: FC = () => {
    const {data, isLoading} = useNurture()
    return (
        !isLoading ? <div className={styles.nurture}>
            {data.map(({
                           video_id: videoId, title, play, music_info: {title: songTitle},
                           author: {unique_id: uniqueId, nickname, avatar}, play_count: playCount,
                           digg_count: diggCount, comment_count: commentCount, share_count: shareCount
                       }, index) => {
                return (
                    <div key={index} className={styles.video}>
                        <VideoUser avatar={avatar} nickname={nickname} uniqueId={uniqueId}/>
                        <div className={styles.videoWrapper}>
                            <Video videoId={videoId} url={play} width={"380px"}/>
                            <VideoDetails commentCount={commentCount} diggCount={diggCount}
                                          playCount={playCount} shareCount={shareCount}/>
                        </div>
                        <div className={styles.videoMusic}>
                            <span>Original:</span>
                            <MusicNote/>
                            <p className={styles.videoMusicTitle}>{songTitle}</p>
                        </div>
                        <div className={styles.videoTitle}>{title}</div>
                    </div>
                )
            })}
        </div> : <div className={styles.circularProgress}><CircularProgress size={30}/></div>
    );
}

export default Nurture;