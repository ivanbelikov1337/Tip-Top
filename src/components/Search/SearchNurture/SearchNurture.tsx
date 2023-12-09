import React, {Fragment, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useSearchNurture} from "../../hook/useSearch";
import styles from "./Search.module.css"
import InfiniteScroll from "react-infinite-scroll-component";
import VideoItem from "../Videos/VideoItem/VideoItem";

const SearchNurture: React.FC = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    const {
        data,
        setParams,
        isFetching, fetchNextPage, hasNextPage
    } = useSearchNurture()

    useEffect(() => {
        setParams((__params) => ({...__params!, key: query!}))
    }, [query, setParams])
    return (
        <div className={styles.wrapper}>
            {data.map(({videos}, index) => {
                return !videos.length ? (
                    <p key={index}>Error</p>
                ) : (
                    <Fragment key={index}>
                        <InfiniteScroll  scrollThreshold={"600px"}
                                        hasMore={hasNextPage!}
                                        next={fetchNextPage}
                                        dataLength={videos.length} loader={isFetching}>
                            {videos.map((item, index) => (
                                <VideoItem key={index} {...item} />)
                            )}
                        </InfiniteScroll>
                    </Fragment>
                )
            })}
            {isFetching && <p>Loading..</p>}
        </div>
    );
}

export default SearchNurture;

