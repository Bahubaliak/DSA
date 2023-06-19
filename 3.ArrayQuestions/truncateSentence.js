// link = https://leetcode.com/problems/truncate-sentence/description/

var truncateSentence = function(s, k) {
  let splitArray = s.split(" ")
  let answer = ""
  for (let i=0; i<k; i++) {
      answer = answer + splitArray[i] + " "
  }

  return answer.trim()
}

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"

let answer = truncateSentence("Hello how are you Contestant", 4)

console.log(answer)