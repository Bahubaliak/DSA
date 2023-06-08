

const selectionSort = (nums) => {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    let minItem = nums[i]

    for (let j = i+1 ; j < length; j++) {
      if (nums[j] < minItem) {
        minItem = nums[j]
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp 
      }
    }
  }
  return nums
}

console.log(selectionSort([52,14,35,5,78,31,9,7,15]))