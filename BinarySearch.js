function bsearch(arr, target, start = 0, end = arr.length - 1) {
    mid = Math.floor((start + end) / 2)
    while (start <= end) {
        if (arr[mid] > target) {
            return bsearch(arr, target, start, mid - 1)
        } else {
            return bsearch(arr, target, mid + 1, end)
        }
    }
    if (arr[mid] === target) {
        return mid;
    } else {
        return -1;
    }
}

console.log(bsearch([3,4,7,8,9,19,21],7));