// Questions https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    const new_x = x.toString().split('').reverse().join('')
    return x === parseInt(new_x)
};