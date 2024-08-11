const arr = [11, 28, 33, 99, 88, 54]

function findPeak(arr) {
  let start = 1
  let end = arr.length - 1
  let mid = Math.floor(start + (end - start)/2)

  while (start <= end) {
    if (start == end) {
      return arr[start]
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor(start + (end - start) / 2 )
  }
}

let res = findPeak(arr)
console.log(res);