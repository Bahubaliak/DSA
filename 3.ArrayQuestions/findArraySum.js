// link = https://www.codingninjas.com/codestudio/problems/sum-of-two-arrays_893186

function reversedArray(array) {
  let start = 0
  let end  = array.length - 1

  while (start < end) {
    let temp = array[start]
    array[start] = array[end]
    array[end] = temp
    start++
    end--
  }
  return array
}

function findArraySum(arr1, arr2, n, m) {
  let carry = 0
  let i = n-1
  let j = m-1
  let answer = []
  while (i>=0 && j>=0) {
    let val1 = arr1[i]
    let val2 = arr2[j]

    let sum = val1 + val2 +  carry
    carry = Math.floor(sum/10)
    sum = sum%10
    answer.push(sum)
    i--
    j--
  }

  while (i>=0) {
    let sum = arr1[i] +  carry
    carry = Math.floor(sum/10)
    sum = sum%10
    answer.push(sum)
    i--
  }

  while (j>=0) {
    let sum = arr2[j] +  carry
    carry = Math.floor(sum/10)
    sum = sum%10
    answer.push(sum)
    j--
  }

  while (carry != 0) {
    let sum = carry
    carry = Math.floor(sum/10)
    sum = sum%10
    answer.push(sum)
  }
  return reversedArray(answer)
}

let ans = findArraySum([1,2,3], [1,2,3], 3, 3)
ans.forEach(element => {
  console.log(element)
})