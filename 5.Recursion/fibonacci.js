//

var fib = function(n) {
  if (n == 0 || n == 1) {
      return n
  }

  return fib(n-1) + fib(n-2)
}

let answer = fib(3)

console.log(answer);