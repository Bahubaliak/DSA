
function insertionSort(n, arr) {

  for (let i = 1; i < n; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j>=0) {
      if(arr[j] > temp) {
        arr[j+1] = arr[j]
      } else {
        break
      }
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

let answer = insertionSort(5, [10, 3, 5, -20, 1])

answer.forEach(item => console.log(item + ' '))