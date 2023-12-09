import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchUserPost} from "../Api/api";
import {CircularProgress} from "@mui/material";
import styles from "./User.css"
import {IData} from "../../utils/IComplementary";
import VideoUserItem from "../Videos/VideoUserItem";
import {Loop} from "@mui/icons-material";
import {IUserVideos} from "./IUserVideos";


const UserVideos: React.FC = () => {
    const [items, setItems] = useState<IData[]>([])

    const [cursor, setCursor] = useState(0)

    const {uniqueId} = useParams()

    const {data, isLoading, isError} = useQuery<IUserVideos>({
        queryKey: ["userPosts", uniqueId],
        queryFn: () => fetchUserPost(uniqueId!, cursor),
        keepPreviousData: true
    })
    const handleLoadMore = () => setCursor(next)

    useEffect(() => {
        const currentVideos = data?.videos || []
        if (!currentVideos.length) return
        setItems((_item) => ([..._item, ...currentVideos]))

    }, [data])

    if (isLoading) return <CircularProgress/>

    if (isError) return <p>Error</p>

    const {hasMore, cursor: next} = data

    return (
        <div className={styles.userWrapper}>
            {items.map((video: IData) =>
                <VideoUserItem play_count={video.play_count}
                               video_id={video.video_id}
                               key={video.video_id}
                               title={video.title}
                               play={video.play}/>
            )}
            {hasMore && (
                <button onClick={handleLoadMore} className={styles.userVideosBtn}>
                    <Loop/>
                    <span>Load more</span>
                </button>
            )}
        </div>
    );
}

export default UserVideos;