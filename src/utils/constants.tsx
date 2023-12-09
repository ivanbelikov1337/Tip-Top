import UserVideos from "../Components/User/UserVideos";
import UserLiked from "../Components/User/UserLiked";

export const USER_TABS = [
    {
        slug: "videos",
        title: "Videos",
        content:  () => {
            return (
                <UserVideos/>
            )
        }
    },
    {
        slug: "liked",
        title: "Liked",
        content: UserLiked
    }
]