// check given array is in asc order or not using recursion

var checkAscending = function (arr, index) {

  if (index == arr.length-1) {
    return true
  }

  let tempAnswer = checkAscending(arr, index+1)

  let result = tempAnswer && arr[index] <= arr[index+1]
  // return arr[index] <= arr[index+1] && checkAscending(arr, index+1)

  return result
}

let answer = checkAscending([1,2,3,4,5], 0)

console.log(answer)