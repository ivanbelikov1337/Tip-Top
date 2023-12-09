import {FC} from "react";
import {useUserFollowing} from "../../../../hook/useUserFollowing";
 interface UserFollowing{
    id: string
}
const UserFollowing: FC<UserFollowing> = ({id}) => {
    const {dataFollowing} = useUserFollowing(id)
    return (
        <div>

        </div>
    );
}

export default UserFollowing;