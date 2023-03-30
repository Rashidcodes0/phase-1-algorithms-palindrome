function isPalindrome(word) {
  // Write your algorithm here
  const chars = word.split("");

  // Initialize two pointers,
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (chars[left] !== chars[right]) {
      return false;
    } left++; right--;
  }
  return true;
}

/* 
  Add your pseudocode here
  1.Convert the input string to an array of characters
 2.Initialize two pointers, one at the start of the array and one at the end
  3.While the pointers haven't crossed each other:
      .If the characters at the pointers don't match, return false
      .Move the pointers towards each other
 4.If we made it through the loop, the string is a palindrome, so return true
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
