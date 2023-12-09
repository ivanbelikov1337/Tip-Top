import {request} from "../utils/complementary";
import {useQuery} from "@tanstack/react-query";
import {IUserFollow} from "../Components/User/UserFollow/UserFollowing/IUserFollow";


export const getUserFollowerList = async (id: string) => {
    return await request({
        path: `user/followers?user_id=${id}&count=50&time=0`,
    }) as IUserFollow

}
export const useUserFollower = (id: string) => {
    const {data, isLoading, error} = useQuery({
        queryKey: ["follower", id],
        queryFn: () => getUserFollowerList(id),
    })
    return {dataFollower: data || []}
}