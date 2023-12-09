
interface IComments {
    id: string
    text: string
    create_time: number
    digg_count: number
    reply_total: number
    user: {
        id: string
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
    status: number
}
export interface IGetComments {
    comments: IComments[]
    total: number
    cursor: number
    hasMore: boolean
}