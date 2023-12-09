import {FC, Fragment} from 'react';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {IVideoDetails} from "./IVideDetails";
import styles from "./videoDeteails.module.css"
import {formatNum} from "../../../utils/complementary";

const VideoDetails: FC<IVideoDetails> = ({playCount, diggCount, commentCount, shareCount}) => {
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
                <Fragment key={index}>
                    {icon}
                    <p>{formatNum(count)}</p>
                </Fragment>
            ))}
        </div>
    )
}

export default VideoDetails;