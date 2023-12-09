import {FC, useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchUserPost} from "../../Api/api";
import {CircularProgress} from "@mui/material";
import styles from "./userVideo.module.css"
import {IData, QuizParams} from "../../../utils/IComplementary";
import VideoUserItem from "../../Videos/VideoUserItem/VideoUserItem";
import {Loop} from "@mui/icons-material";
import {IUserVideos} from "./IUserVideos";

const UserVideos: FC = () => {
    const [items, setItems] = useState<IData[]>([])
    const [cursor, setCursor] = useState(0)
    const {id: uniqueId} = useParams() as QuizParams
    const {data, isLoading, isError} = useQuery<IUserVideos>({
        queryKey: ["userPosts", uniqueId],
        queryFn: () => fetchUserPost(uniqueId, cursor),
        keepPreviousData: true
    })

    useEffect(() => {
        const currentVideos = data?.videos || []
        if (!currentVideos.length) return
        setItems((_item) => ([..._item, ...currentVideos]))
    }, [data])

    if (isLoading) return <div className={styles.circularProgress}><CircularProgress/></div>

    if (isError) return <p>Error</p>

    const {hasMore, cursor: next} = data

    return (
        <div className={styles.wrapper}>
            {items.map((video: IData) =>
                <VideoUserItem play_count={video.play_count}
                               video_id={video.video_id}
                               key={video.video_id}
                               title={video.title}
                               play={video.play}/>
            )}
            {hasMore && (
                <button onClick={() => setCursor(next)} className={styles.userVideosBtn}>
                    <Loop/>
                    <span>Load more</span>
                </button>
            )}
        </div>
    );
}

export default UserVideos;