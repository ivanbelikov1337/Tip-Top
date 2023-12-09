import {request} from "../utils/complementary";
import {useQuery} from "@tanstack/react-query";
import {IUserFollow} from "../Components/User/UserFollow/UserFollowing/IUserFollow";


export const getUserFollowingList = async (id:string) => {
    return await request({
        path: `user/following?user_id=${id}&count=50`,
    }) as IUserFollow

}
export const useUserFollowing = (id:string) => {
    const {  data, isLoading,error} = useQuery({
        queryKey: ["following", id],
        queryFn: () => getUserFollowingList(id),
    })
    return {dataFollowing: data || []}
}