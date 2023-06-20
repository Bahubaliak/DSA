// link = https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/

var findFinalValue = function(nums, original) {
  if (!nums.includes(original)) {
    return original
  }
  
  let isPresent = true
  while(isPresent) {
    if (!nums.includes(original)) {
      return original
    } else {
      original = 2*original
    }
  }
}

let nums = [5,3,6,1,12], original = 3

let answer = findFinalValue(nums, original)

console.log(answer)