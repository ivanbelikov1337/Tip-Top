import {FC, Fragment} from 'react';
import {BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
import {IUserSocialMedia} from "./IUserSocialMedia";
import styles from "./userSocialMedia.module.css";

const UserSocialMedia: FC<IUserSocialMedia> = ({youtube_channel_id, ins_id, twitter_id}) => {
    const socialsData = [
        {
            link: `https://youtube.com`,
            icon: <BsYoutube/>,
            id: youtube_channel_id
        },
        {
            link: `https://instagram.com`,
            icon: <BsInstagram/>,
            id: ins_id
        },
        {
            link: `https://twitter.com`,
            icon: <BsTwitter/>,
            id: twitter_id
        },
    ]
    const hasSocials = socialsData.some(({id}) => id)
    return (
        <>
            {hasSocials && (
                <ul className={styles.userCosials}>
                    {socialsData.map(({link, id, icon}) => {
                        const href = `${link}/${id}`
                        return (
                            id ? (<li key={href}>
                                    <a href={href} target="__blank">
                                        {icon}
                                    </a>
                                </li>)
                                : <Fragment key={href}/>)
                    })}
                </ul>
            )}
        </>
    );
}

export default UserSocialMedia;