import {useQuery} from "@tanstack/react-query";
import {request} from "../utils/complementary";
import {IUser} from "../Components/User/IUser";

const getUser = async (uniqueId: string) => {
    return await request({
        path: `user/info?unique_id=${uniqueId}`,
    }) as IUser
}
export const useUser = (uniqueId: string) => {
    const {data, isLoading} = useQuery({
        queryKey: ["user", uniqueId],
        queryFn: () => getUser(uniqueId)
    })

    return {
        data: data! || {},
        code: data?.code,
        error: data?.msg,
        isLoading
    }
}