import {IData} from "../../utils/IComplementary";

export interface IUserVideos   {
    cursor: number
    hasMore: boolean
    videos: IData[]
}