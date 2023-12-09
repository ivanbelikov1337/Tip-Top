import {useInfiniteQuery} from "@tanstack/react-query";
import {request} from "../utils/complementary";
import {useState} from "react";
import {ISearch} from "../Components/Search/ISearch";


const getSearchNurture = async ({key, cursor}: { key: string, cursor?: number }) => {
    const res = await request({
        path: `feed/search?keywords=${key}&count=10&cursor=${cursor}&region=US`,
    })
    return res as ISearch
}
export const useSearchNurture = () => {
    const [params, setParams] = useState({
        key: "",
        cursor: 0
    })
    const {data, fetchNextPage, hasNextPage, isFetching} = useInfiniteQuery({
        queryKey: ["searchNurture", params.key],
        queryFn: ({pageParam = params}) => getSearchNurture(pageParam),
        getNextPageParam: (data) => {
            return data?.hasMore ? {...params, cursor: data?.cursor } : undefined
        },
        enabled: !!params.key
    })
    return {data: data?.pages || [], isFetching, hasNextPage , fetchNextPage, setParams}
}