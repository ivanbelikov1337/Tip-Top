import {FC} from 'react';
import styles from "../video.module.css";
import PauseIcons from "@mui/icons-material/Pause";
import PlayCircleIcons from "@mui/icons-material/PlayCircle";
import {IControlVideo} from "./IControlVideo";


const ControlVideo: FC<IControlVideo> = ({isPlaying}) => {
    return (
        <>
            {isPlaying ? <div className={styles.pause}><PauseIcons sx={{fontSize: 60, color: "silver"}}/></div> :
                <div className={styles.start}><PlayCircleIcons sx={{fontSize: 60, color: "silver"}}/></div>}
        </>
    );
}

export default ControlVideo;