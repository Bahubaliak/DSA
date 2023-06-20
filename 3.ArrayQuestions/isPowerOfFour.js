// link = https://leetcode.com/problems/power-of-four/description/

var isPowerOfFour = function(n) {
  while (n > 1) {
      n = n/4
  }

  return n === 1
}

let answer = isPowerOfFour(16)

console.log('answer is ',answer)