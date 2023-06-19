// link = https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

var differenceOfSum = function(nums) {
  let elementSum = 0
  let digitSum = 0
  nums.forEach(num => {
      elementSum += num
      let digit = num.toString()
      for (let i=0; i<digit.length; i++) {
          let d =  Number(digit.charAt(i))
          digitSum += d
      }
  })

  return elementSum - digitSum
}

let nums = [1,15,6,3]

let answer = differenceOfSum(nums)

console.log(answer);