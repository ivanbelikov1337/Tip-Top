import {request} from "../utils/complementary";
import {useQuery} from "@tanstack/react-query";
import {IGetComments} from "../Components/Videos/SingleVideo/IGetComments";

interface IVideoData {
    cursor: number
    id: string | undefined
}

const getComments = async ({id, cursor}: IVideoData) => {
    return await request({
        path: `comment/list?url=https://www.tiktok.com/video${id}&count=10&cursor=${cursor}'`,
    }) as IGetComments
}
export const useComments = (videoData: IVideoData) => {
    const {data, isLoading} = useQuery({
        queryKey: ["commentsVideo", videoData.id],
        queryFn: () => getComments(videoData)
    })
    return {comments: data?.comments || [], isLoadingComments: isLoading}
}