export interface IUserFollow {
    "followings": IUserFollowingData[],
    "total": number,
    "time": number,
    "hasMore": true
}

export interface IUserFollowingData {
    d: string
    region: string
    sec_uid: string
    unique_id: string
    nickname: string
    signature: string
    avatar: string
    verified: boolean
    secret: boolean
    aweme_count: number
    follower_count: number
    favoriting_count: number
    total_favorited: number
    ins_id: string
    youtube_channel_title: string
    youtube_channel_id: string
    twitter_name: string
    twitter_id: string
}