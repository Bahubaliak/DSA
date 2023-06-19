// link = https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence

var areNumbersAscending = function(s) {
  let numbers = []
  for(let i=0; i<100; i++) {
      numbers.push(i.toString())
  }

  let splitArray = s.split(' ')
  let isIncrease = true
  let smallest = -1
  for (let j=0; j < splitArray.length; j++) {
      if(numbers.includes(splitArray[j])) {
          let number = Number(splitArray[j])
          if (number > smallest) {
              smallest = number
          } else {
              return false
          }
      }
  }
  return true
}

let answer = areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")

console.log(answer)