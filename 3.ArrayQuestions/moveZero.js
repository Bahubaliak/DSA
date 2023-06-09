// question link = https://leetcode.com/problems/move-zeroes/

function moveZero(n, arr) {
  let nonZero = 0

  for (let j=0; j<n; j++ ) {
    if (arr[j] != 0) { 
      // if current element != 0 then swap with nonZero index. i.e current element should come at nonZero index
      let temp = arr[j]
      arr[j] = arr[nonZero]
      arr[nonZero] = temp
      nonZero++
    }
  }

  return arr
}


let answer = moveZero(7, [12, 0, 4, 0, 1, 0, 9])

answer.forEach(element => console.log(element + ' '))