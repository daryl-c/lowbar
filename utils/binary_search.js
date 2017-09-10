module.exports = (list, val) => {
    let start = 0;
    let end = list.length - 1;
    
    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);
        let midVal = list[midIndex];
        if (midVal === val) return midIndex;
        if (midVal < val) {
            start = midIndex + 1;
        }
        else end = midIndex - 1;
    }
    return -1;
};
