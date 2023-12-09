import {request} from "../utils/complementary";

const fetchsUserPost = async (uniqueId: string, cursor: number) => {
    const path = `user/posts?unique_id=${uniqueId}&count=10&cursor=${cursor}'`
    return await request({
        path
    })
}