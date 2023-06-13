// link = https://leetcode.com/problems/left-and-right-sum-differences/



var leftRightDifference = function(nums) {
  if (nums.length == 0) return [0]
  let answer = []
  let leftSum = [0]
  let rightSum = [0]
  let start = 1
  end = nums.length-1
  while (start < nums.length) {
      leftSum.push(nums[start-1] + leftSum[start-1])
      start++
  }

   while (end > 0) {
      rightSum.unshift(nums[end] + rightSum[0])
      end--
  }

  for(let i = 0; i < leftSum.length; i++) {
      answer.push(Math.abs(leftSum[i]- rightSum[i]))
  }

  return answer

}

let answer = leftRightDifference([10,4,8,3])
console.log(answer)