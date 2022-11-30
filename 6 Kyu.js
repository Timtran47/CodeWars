//Stop gninnipS My sdroW! 10/19/22

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"



//solution

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//counting duplicates 10/21/22

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//solution

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Nth Smallest Element (Array Series #4) 10/26


// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 


//solution

const nthSmallest = (arr, pos) => arr.sort( (a,b) => a-b)[pos - 1]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Duplicate Encoder 10/27/22

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 



//Solution

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
  }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//String transformer 11/1/2022

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


//Solution
function stringTransformer(str) {
  //invert case for each character
  const newStr = str.split("").map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join("")
  //reverse the order of words
  return newStr.split(" ").reverse().join(' ')
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sort by Last Char 11/2/2022

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


//solution

function last(x){
  return x.split(" ").sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length-1))
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//shorter concat [reverse longer] 11/3/2022

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


//My solution
function shorter_reverse_longer(a,b){
  if(a.length<b.length){
    let short = a
    let long = b.split('').reverse().join('')
    return `${short}${long}${short}`
  }else{
    let short = b
    let long = a.split('').reverse().join('')
    return `${short}${long}${short}`
  }
}

//optimal solution
// function shorter_reverse_longer(a,b){
//   return a.length >= b.length ? b + a.split('').reverse().join('') + b :
//   a + b.split('').reverse().join('') + a;
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//11/7/2022
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).



//solution

function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length){
    return 0
  }else{
    return arr.reduce( (a, acc) => a + acc, 0) - mixArr.reduce( (a, acc) => a + acc, 0)
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array.diff 11/9/22

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



//solution

function arrayDiff(a, b) {
  if( a == [] ){
    return b
  }else if (b == []){
    return a
  }else{
    return a.filter(num => !b.includes(num))
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Take a Ten Minutes Walk 11/13/22
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//solution
function isValidWalk(walk) {
  if(walk.length === 10) {
    var ns = 0;
    var we = 0;
    
    walk.forEach(function(v,i,a) {
      if(v === 'n') { ns += 1; }
      if(v === 's') { ns -= 1; }
      if(v === 'w') { we += 1; }
      if(v === 'e') { we -= 1; }
    });
    
    if( ns === 0 && we === 0)
      return true
    else
      return false
  }  
  else
    return false
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sort the odd 11/15/22

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


//solution

function sortArray(arr) {
  // filter->sort
  const oddNums = arr.filter(n => n% 2 !== 0 ).sort((a,b) => b - a)
  //console.log(oddNums)
  //map
  return arr.map(n => n % 2 === 0 ? n : oddNums.pop())
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//String array duplicates 11/29


// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.


//solution

function dup(s) {
  return s.map( word => word.split('').filter( (letter, i, arr)=> letter != arr[i - 1] ).join('') )
 };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////