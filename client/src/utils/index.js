export const setDuration = (duration) => {
    duration = duration.slice(2).replace("H", ":").replace("M",":").replace("S","");
    return duration;
}

export const setViewCount = (viewCount) => {
    const viewCountDigit = viewCount.toString().length;
    
    if (viewCountDigit > 3 && viewCountDigit < 7) {
        return viewCount.toString().slice(0, -3) + "K";
    }
    if (viewCountDigit > 6) {
        return viewCount.toString().slice(0, -6) + "M";
    }
    if (viewCountDigit < 4) {
        return viewCount.toString();
    }
}