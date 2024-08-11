function insertionSort(arr, row, col, max) {
    
    if (row < 0) {
        return arr
    }
    if (col < row) {
        if (arr[col] > arr[max]) {
            max = col
        }
        return insertionSort(arr, row, col + 1, max)
    } else {
        let temp = arr[row ]
        arr[row ] = arr[max]
        arr[max] = temp
        return insertionSort(arr, row-1, 0, 0)
    }
    
}

const ans = insertionSort([20, 100, 250, -10000], 3, 0, 0)
console.log(ans)
