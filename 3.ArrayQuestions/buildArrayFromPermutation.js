// link = https://leetcode.com/problems/build-array-from-permutation/description/

var buildArray = function(nums) {
  let ans = []

  for (let i=0; i<nums.length; i++) {
      ans.push(nums[nums[i]])
  }
  return ans
}

let answer = buildArray([0,2,1,5,3,4])

console.log(answer)