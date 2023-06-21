
var sayDigit = function(n, arr) {
  if(n == 0) {
    return
  }

  let digit = n % 10
  n = Math.floor(n/10)

  sayDigit(n, arr)

  console.log(arr[digit])
}

let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

sayDigit(987654321, arr)
