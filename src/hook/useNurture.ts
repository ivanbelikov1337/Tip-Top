import {useQuery} from "@tanstack/react-query";
import {request} from "../utils/complementary";
import {IData} from "../utils/IComplementary";

const getNurture = async () => {
    return await request({
        path: `feed/list?region=US&count=10`,
    }) as IData []
}
export const useNurture = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["nurture"],
        queryFn: getNurture
    })
    return {data: data || [], isLoading}
}