// link = https://leetcode.com/problems/search-a-2d-matrix-ii/description/

function searchIn2D_Array(matrix, target) {
  let row = matrix.length
  let col = matrix[0].length

  let rowIndex = 0
  let colIndex = col - 1

  while (rowIndex < row && colIndex >= 0) {
      let element = matrix[rowIndex][colIndex]

      if (element == target) {
          return 1
      }

      if (element < target){
          rowIndex++
      } else {
           colIndex--
      }
  }
  return 0
}

let answer = searchIn2D_Array([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)

console.log(answer)