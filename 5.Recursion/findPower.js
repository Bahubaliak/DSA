
var findPower = function(a,b) {
  if (b == 0) {
    return 1
  }
  
  if (b == 1) {
    return a
  }

  let ans = findPower(a, Math.floor(b/2))

  if(b%2 == 0) {
    return ans * ans
  } else {
    return a * ans * ans
  }
}

let answer = findPower(2,10)


console.log(answer);