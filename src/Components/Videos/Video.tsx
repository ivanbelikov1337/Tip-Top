import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./video.module.css"
import {IVideo} from "./IVideo";
import ReactPlayer from "react-player";
import ControlVideo from "./ControlVideo/ControlVideo";
import {Waypoint} from "react-waypoint";

const Video: FC<IVideo> = ({videoId, url = "", width}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isReady, setReady] = useState(false)
    return (
        <Waypoint onEnter={() => setIsPlaying(true)}
                  onLeave={() => setIsPlaying(false)}
                  scrollableAncestor={window}
                  bottomOffset={270}
                  topOffset={330}>
            <div onScroll={() => setIsPlaying(!isPlaying)}
                 className={`${styles.wrapper} ${isPlaying ? "playing" : ""}`}>
                {!isReady && (<p>Loading...</p>)}
                <Link to={`/video/${videoId}`}>
                    <ReactPlayer onReady={() => setReady(true)}
                                 playing={isPlaying}
                                 width={width}
                                 height={"auto"}
                                 loop={true}
                                 controls={false}
                                 url={url}
                    />
                </Link>
                <div className={styles.videoControls} onClick={() => setIsPlaying(!isPlaying)}>
                    <ControlVideo isPlaying={isPlaying}/>
                </div>
            </div>
        </Waypoint>
    )
}

export default Video;