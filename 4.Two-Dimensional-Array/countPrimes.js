// link = https://leetcode.com/problems/count-primes/description/

var countPrimes = function(n) {

  let primes = new Array(n+1).fill(true)

  primes[0] = false
  primes[1] = false
  let count = 0
  for (let i=2; i<n; i++) {
      if(primes[i]) {
          count++
          for (let j=2*i; j<n; j=j+i) {
              primes[j]= false
          }
      }
  }
  return count
}

let answer = countPrimes(10)

console.log(answer);