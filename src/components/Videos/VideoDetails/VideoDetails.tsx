import React from 'react';

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {IVideoDetails} from "./IVideDetails";
import styles from "../Nurture/Nurture.module.css";
import {formatNum} from "../../utils/complementary";

const VideoDetails: React.FC<IVideoDetails> = ({playCount,diggCount,commentCount,shareCount}) => {


    const details = [
        {
            icon: <PlayArrowIcon/>,
            count: playCount
        },
        {
            icon: <ChatBubbleIcon/>,
            count: commentCount
        },
        {
            icon: <ShareIcon/>,
            count: shareCount
        },
        {
            icon: <FavoriteIcon/>,
            count: diggCount
        },
    ]
    return (
        <div className={styles.videoInfo}>
            {details.map(({count, icon}, index) => (
                <div key={index} className={styles.videoInfoItems}>
                    {icon}
                    <p>{formatNum(count)}</p>
                </div>
            ))}
        </div>
    )
}

export default VideoDetails;