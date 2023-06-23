
var merge = function(arr, start, end) {

  let mid = start + Math.floor((end-start)/2)
  let len1 = mid - start + 1
  let len2 = end-mid
  let first = new Array(len1)
  let second = new Array(len2)

  let mainIndex = start

  //copy left part array
  for (let i=0; i<len1; i++) {
    first[i] = arr[mainIndex++]
  }

   //copy rigth part array
   mainIndex = mid + 1
   for (let i=0; i<len2; i++) {
    second[i] = arr[mainIndex++]
  }

  //now merge both first and second array
  let index1 = 0
  let index2 = 0
  mainIndex = start

  while(index1 < len1 && index2 < len2) {
    if (first[index1] < second[index2]) {
      arr[mainIndex++] = first[index1++]
    } else {
      arr[mainIndex++] = second[index2++]
    }
  }

  // if still first array has some elements left
  while(index1 < len1) {
    arr[mainIndex++] = first[index1++]
  }

  // if still second array has some elements left
  while(index2 < len2) {
    arr[mainIndex++] = second[index2++]
  }
}

var mergeSort = function(arr, start, end) {
  
  // base case
  if (start >= end) {
    return
  }

  let mid = start + Math.floor((end-start)/2)

  //left part sort
  mergeSort(arr, start, mid)

  //rigth part sort
  mergeSort(arr, mid+1, end)

  // merge left and right part array
  merge(arr, start, end)

}

let arr = [1,20,15,9,26]
let start = 0
let end = arr.length - 1

console.log('Before sorting ', arr);
mergeSort(arr, start, end)
console.log('After sorting ', arr);

