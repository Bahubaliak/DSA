// link = https://leetcode.com/problems/rotate-array/

function rotateArray(n, arr, k) {
  let tempArray = Array(5).fill(0)
  arr.forEach((element, index) => {
    tempArray[(index+k) % n] = element
  })

  return tempArray
}

let answer = rotateArray(5, [10,20,30,40,50], 2)

answer.forEach(ele => console.log(ele + ' '))