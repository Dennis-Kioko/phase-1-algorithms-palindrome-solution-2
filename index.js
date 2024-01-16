function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the begining to the middle
  // racecar 7/2 == 3.5
  for (let i = 0; i < word.length / 2; i++) {
    //check letter to the corresponding letter from the end
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    //if letters don't match, return false
    if (startChar !== endChar) return false;
  }
  // return true
  return true;
}

/* 
  Add your pseudocode here
  if the first letter is the same as the last letter, and the second letter is the same as the second last letter, etc
  until we reach middle, return true.

  iterate from the begining to the middle,check letter to the corresponding letter from the end

  if letters don't match, return false

    return true
  ^   ^
  abba
  ^   ^
  a   b return true

  robot
  ^   ^
  r   t return false

  racecar
  0123456
  i     j
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
