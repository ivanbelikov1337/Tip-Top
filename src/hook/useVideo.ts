import {request} from "../utils/complementary";
import {useQuery} from "@tanstack/react-query";
import {IDataSingleVideo} from "../Components/Videos/SingleVideo/IGetSingleVideo";

const getSingleVideo = async (uniqueId: string) => {
    const res = await request({
        method: "POST",
        path: "",
        body: new URLSearchParams({
            url: `https://www.tiktok.com/video${uniqueId}`,
            hd: '1'
        })
    })
    return res as IDataSingleVideo
}
export const useVideo = (uniqueId: string) => {
    const {data, isLoading} = useQuery({
        queryKey: ["singleVideo", uniqueId],
        queryFn: () => getSingleVideo(uniqueId)
    })
    return {data: data, isLoading}

}