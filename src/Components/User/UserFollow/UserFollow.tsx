import  {FC} from 'react';
import styles from "./userFollow.module.css"
import {IUserFollow} from "./IUserFollow";
import UserFollower from "./UserFollower/UserFollower";
import UserFollowing from "./UserFollowing/UserFollowing";


const UserFollow: FC<IUserFollow> = ({closeFollowing, closeFollower,id}) => {
    return (
        <div className={styles.wrapper}>
            {closeFollowing && (
                <UserFollowing id={id}/>
            )}
            {closeFollower && (
                <UserFollower id={id}/>
            )}
        </div>
    );
}

export default UserFollow;