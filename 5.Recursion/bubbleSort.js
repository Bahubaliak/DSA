function bubble(arr, row, col) {
    
    if (row < 1) {
        return arr
    }
    if (col < row) {
        if (arr[col] > arr[col+1]) {
            let temp = arr[col]
            arr[col] = arr[col+1]
            arr[col+1] = temp
        }
        return bubble(arr, row, col + 1)
    } else {
        return bubble(arr, row-1, 0)
    }
    
}

const ans = bubble([4, 3, 2, 1], 4, 0)
console.log(ans)
