export interface IUser {
    stats: {
        diggCount: number
        followerCount: number
        followingCount: number
        heart: number
        heartCount: number
        videoCount: number
    }
    user: {
        avatarLarger: string
        avatarMedium: string
        avatarThumb: string
        commentSetting: null
        duetSetting: null
        ftc: boolean
        id: string
        ins_id: string
        isADVirtual: boolean
        isUnderAge18: boolean
        nickname: string
        openFavorite: boolean
        privateAccount: boolean
        relation: number
        secUid: string
        secret: boolean
        signature: string
        stitchSetting: null
        twitter_id: string
        uniqueId: string
        verified: boolean
        youtube_channel_id: string
        youtube_channel_title: string
    }
    code: number
    msg: string
}