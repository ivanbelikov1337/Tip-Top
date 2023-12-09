import {FC} from 'react';
import {useUserFollower} from "../../../../hook/useUserFollower";

type UserFollow = {
    id: string
}
const UserFollower: FC<UserFollow> = ({id}) => {
    const {dataFollower} = useUserFollower(id)
    return (
        <div></div>
    );
}

export default UserFollower;