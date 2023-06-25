
var partion = function(arr, start, end) {
  // take starting element as pivot
  let pivot = arr[start]

  let count = 0

  //count how many element are > than starting element
  for(let i=start+1; i<=end; i++) {
    if(arr[i] < pivot) {
      count++
    }
  }


  let pivotIndex = start+count

  // swap pivot element with pivotIndex element
  let temp = arr[pivotIndex]
  arr[pivotIndex] = arr[start]
  arr[start] = temp

  let i = start
  let j = end

  // take two pointers i and j and traverse. Compare ith and jth element and swap if they math the condition
  while(i < pivotIndex && j>pivotIndex) {

    while(arr[i] < arr[j]) {
      i++
    }

    while(arr[j] > arr[i]) {
      j--
    }

    if(i < pivotIndex && j>pivotIndex) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }

  return pivotIndex
}

var quickSort = function (arr, start, end) {
  if (start >= end) {
    return
  }

  let partionIndex = partion(arr, start, end)

  // partion of left side of array
  quickSort(arr, start, partionIndex-1)

  // partion of right side of array
  quickSort(arr, partionIndex+1, end)
}



let arr = [20,15,10,3,48]

let n = arr.length

console.log('before sorting', arr)

quickSort(arr, 0, n-1)

console.log('after sorting', arr)