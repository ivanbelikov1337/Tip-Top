import {FC, useState} from "react";
import {useVideo} from "../../../hook/useVideo";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./singleVideo.module.css"
import {CircularProgress} from "@mui/material";
import {Close, MusicNote} from "@mui/icons-material";
import VideoUser from "../VideoUser/VideoUser";
import ReactPlayer from "react-player";
import PauseIcons from "@mui/icons-material/Pause";
import PlayCircleIcons from "@mui/icons-material/PlayCircle";
import {useComments} from "../../../hook/useComments";
import {QuizParams} from "../../../utils/IComplementary";


const SingleVideo: FC = () => {
    const navigate = useNavigate()
    const {id} = useParams() as QuizParams
    const {data, isLoading} = useVideo(id)
    const {comments, isLoadingComments} = useComments({id, cursor: 0})
    const [isPlaying, setIsPlaying] = useState(false)
    const [isReady, setReady] = useState(false)

    if (isLoading) return <div className={styles.circularProgress}><CircularProgress size={30}/></div>

    const {hdplay, music_info: {title: songTitle}, title} = data!
    return (
        <div className={styles.wrapper}>
            <div className={styles.singleVideoClose} onClick={() => navigate(-1)}>
                <Close/>
            </div>
            <div className={styles.singleVideoItem}>
                {!isReady && (<p>Loading...</p>)}
                <ReactPlayer onReady={() => setReady(true)}
                             playing={isPlaying}
                             width={"24rem"}
                             height={"43rem"}
                             loop={true}
                             controls={false}
                             url={hdplay}
                />
                <div className={styles.videoControls} onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ?
                        <div className={styles.pause}><PauseIcons sx={{fontSize: 60, color: "silver"}}/></div> :
                        <div className={styles.start}><PlayCircleIcons sx={{fontSize: 60, color: "silver"}}/></div>}
                </div>
            </div>
            <div className={styles.singleVideoInfo}>
                <div className={styles.singleVideDescription}>
                    <VideoUser uniqueId={data?.author.unique_id!}
                               nickname={data?.author.nickname!}
                               avatar={data?.author.avatar!}/>
                </div>
                <div className={styles.singeVideoSong}>
                    <MusicNote/>
                    <span>{songTitle}</span>
                </div>
                <div className={styles.singleVideoTitle}>
                    {title}
                </div>
                {isLoadingComments ? <div className={styles.circularProgress}><CircularProgress size={30}/></div> : (
                    comments.length ?
                        <ul className={styles.singleVideoComments}>
                            {comments.map(({user, text, id}) => (
                                <li key={id} className={styles.singleVideoComment}>
                                    <VideoUser uniqueId={user.unique_id} nickname={user.nickname} avatar={user.avatar}/>
                                    <p className={styles.singleVideoCommentText}>
                                        {text}
                                    </p>
                                </li>
                            ))}
                        </ul> :
                        <div>No Comments.</div>
                )}
            </div>
        </div>
    )
}
export default SingleVideo;