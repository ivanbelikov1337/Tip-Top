import {IRequest} from "./IComplementary";

export const request = async ({path, method = "GET", body}: IRequest) => {
    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`;
    const options = {
        method,
        headers: {
            'X-RapidAPI-Key': '9ae9a64b0cmsh9f8265f82f5bd0dp1d27cbjsn51a27d97f30c',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        },
        body
    }
    try {
        const response = await fetch(url, options as RequestInit);
        const result = await response.json();
        if (result.code === -1) return result.code
        return result.data
    } catch (error) {
        console.error(error);
    }
}
export const formatNum = (num: number) => {
    const changes = Intl.NumberFormat("en", {
        notation: "compact"
    })
    return changes.format(num)
}