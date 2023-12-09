export interface IUserBordInfo {
    nickname: string
    uniqueId: string
    followingCount: number
    followerCount: number
    heartCount: number
    videoCount: number
    setClose: Function
    setCloseFollower: Function
    setCloseFollowing: Function
}