interface IData {
    anchors: any
    anchors_extras: string
    author: {
        id: string
        unique_id: string
        nickname: string
        avatar: string
    }
    aweme_id: string
    comment_count: number
    commerce_info: {
        adv_promotable: boolean
        auction_ad_invited: boolean
        branded_content_type: number
        with_comment_filter_words: boolean
    }
    commercial_video_info: string
    cover: string
    create_time: number
    digg_count: number
    download_count: number
    duration: number
    is_ad: boolean
    is_top: number
    music: string
    music_info: {
        id: string
        title: string
        play: string
        cover: string
        author: string
    }
    origin_cover: string
    play: string
    play_count: number
    region: string
    share_count: number
    title: string
    video_id: string
}

export interface ISearch {
    cursor: number
    hasMore: boolean
    videos:  IData[]
}

