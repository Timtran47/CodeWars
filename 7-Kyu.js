//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Jaden Casing Strings 5-9-22

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//solution
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x) {
            return x.toUpperCase();
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Alphabet symmetry 5-10-22

    // Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

    // Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
    
    // solve(["abode","ABc","xyzD"]) = [4, 3, 1]
    // See test cases for more examples.
    
    // Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
    


    //solution
    function solve(arr){  
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabet.indexOf(y)).length);
      };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 //Square Every Digit 6/13/22

//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer



//solution
const squareDigits = num => Number(String(num).split("").map( x => x*x).join(''))

//completed



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



//SOLUTION
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
  }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Highest and Lowest 6/15/22


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.




//solution

function highAndLow(numbers){
  //to rearrange number in an array highest to lowest
  let orderNum =  numbers.split(" ").sort((a,b) => b - a)
  //retrive highest number
  let highNum = orderNum[0]
  //retrive lowest number
  let lowNum = orderNum.slice(-1)
  //display wanted results
  return `${highNum} ${lowNum}`
}
//completed//



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Descending Order      6/16/22

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



//solution
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
  }

//completed

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get the Middle Character 6/17/22
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.



//solution

function getMiddle(s){
  let length = s.length
  let middle = Math.floor(length/2)
  
  if (length % 2 === 0){
    // if even
    return s[middle - 1] + s [middle]
    
  }else{
    // if odd
    return s[middle]
  }
  
}

//completed//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//List Filtering 6/20/22





//solution
function filter_list(l) {
  // Return a new array with the strings filtered out
  let filteredArr = []
  for (let i = 0; i < l.length; i++){
    if (typeof l[i] !== "string"){
      filteredArr.push(l[i])
    }
  }
  return filteredArr
}









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////