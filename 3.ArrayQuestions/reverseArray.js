
//question link = https://www.codingninjas.com/codestudio/problems/reverse-the-array_1262298

function reverseArray(n, arr) {
  // n -> no. of elements
  // arr -> given array
  let start = 0
  let end = n-1 
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    
    start++
    end--
  }
  return arr
}

let answer = reverseArray(5, [50, 10, 20, 40, -30])

answer.forEach( item => console.log(item + ' '))

// reversed array = [-30, 40, 20, 10, 50]