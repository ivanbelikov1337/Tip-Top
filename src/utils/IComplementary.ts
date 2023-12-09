export interface IRequest {
    path: string
    method?: string
    body?: {}

}

export interface IData {
    anchors: null
    anchors_extras: string
    author: {
        id: string,
        unique_id: string,
        nickname: string,
        avatar: string
    }
    aweme_id: string
    comment_count: number
    commerce_info: {
        adv_promotable: false,
        auction_ad_invited: false,
        branded_content_type: 0,
        with_comment_filter_words: false
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
        cover: string,
        author: string
    }
    origin_cover: string
    play: string
    play_count: number
    region: string
    share_count: number
    title: string
    video_id: string
    wmplay: string

}

export type QuizParams = {
    id: string
}