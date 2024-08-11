const arr = [11, 28, 33, 35, 54, 88, 99]

// smallest element in an array i.e. >= target element
// EX: target = 37 doesn't exist in an array but the smallest element in an raay i.e. >= 37 is 54
function findCeil(arr, target) {
  let start = 1
  let end = arr.length - 1
  let mid = Math.floor(start + (end - start)/2)

  while (start <= end) {
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor(start + (end - start) / 2 )
  }
  return arr[start]
}

let res = findCeil(arr, 35)
console.log(res);