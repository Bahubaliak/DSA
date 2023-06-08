// question link = https://leetcode.com/problems/merge-sorted-array/

function mergedSortedArray(arr1, m, arr2, n) {
  // arr1 -> first given array,
  // arr2 -> second given array
  // m -> size of first array
  // n -> size of second array

  let pointer1 = 0, pointer2 = 0
  let answer = []
  while (pointer1 < m && pointer2 < n) {
    if (arr1[pointer1] < arr2[pointer2]) {
      answer.push(arr1[pointer1])
      pointer1++
    } else {
      answer.push(arr2[pointer2])
      pointer2++
    }
  }

  while (pointer1 < m ) {
    // copy remaining arr1 elsements
    answer.push(arr1[pointer1])
    pointer1++
  }

  while (pointer2 < n) {
    // copy remaining arr2 elements
    answer.push(arr2[pointer2])
    pointer2++ 
  }

  return answer

}

let arr1 = [1,3,5,7]
let arr2 = [2,4,6]

let answer = mergedSortedArray(arr1, 4, arr2, 3)

answer.forEach(element => console.log(element) + ' ')