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

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



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



//completed//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Isograms 6/21/2022


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)




//solution
const isIsogram = (word) => {
//use Set to return only unique characters then .size to determine the amount of uniqe characters. Compare to word length to set size to see if equal
  return new Set(word.toLowerCase()).size === word.length
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Exes and Ohs 6-22-22


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false




//solution
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Shortest Word     6/28/22


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



//solution
function findShort(s){
  //seperate each word as an array
  let wordArr = s.split(" ")
  //get the length for each word
  let lengthArr = wordArr.map(x => x.length)
  //sort by length
  let sortedArr = lengthArr.sort((a,b) => a -b)
  return sortedArr[0]
}

//completed//


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complementary DNA 

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


//solution
function DNAStrand(dna){
  //your code here
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/G/g, "c")
    .replace (/C/g, "g")
    .toUpperCase()
}

//completed


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Credit Card Mask 7/1/22


// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"



//solution

function maskify(cc) {
 return "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4);
}

 //Alternate solution

 const maskify = cc => "#".repeat(Math.max(0, cc.length-4)) + cc.slice(-4)

//completed///

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sum of two lowest positive integers  7/6/22



// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



//Solution
function sumTwoSmallestNumbers(numbers) {  
  //Code here
 let orderedNum =  numbers.sort((a,b) => a-b)
 return orderedNum[0] + orderedNum[1]
}

//completed//


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Two to one   7/7/22

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//solution
function longest(s1, s2) {
  let combinedString = s1 + s2
  let arrOfLetters = combinedString.split('').sort()
  return [...new Set(arrOfLetters)].join('')
}

//Completed//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Beginner Series #3 Sum of Numbers 7/11/22
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)



//solution
function getSum( a,b )
{
 let min = Math.min(a, b), max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;  //guassian formula
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///Friend or Foe? 7/13/22

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.



//solution

const friend = friends => friends.filter(word => word.length == 4)


//completed//


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Growth of a Population 7/15/22



// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:

// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.




//solution

function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

//completed//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Categorize New Member 7/18/22

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]




//solution

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//completed

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Mumbling 7/19/2022

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



//solution


function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


//completed

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Printer Errors 7/20/22


// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"



//Solution
function printerError(s) {
  let filtered = s.replace(/[a-m]/gi, '')
  return `${filtered.length}/${s.length}`
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Regex validate PIN code 7/21/22

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//solution

function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
  return false;
}
for (let i = 0; i < pin.length; i++) {
  if (pin[i] > '9' || pin[i] < '0') {
     return false;
  }

}
return true;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Is this a triangle? 7/22/22

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).




//solution
//triangle inequality theorm. The sum of two sides must be greater than the last. 
const isTriangle = (a, b, c) => ( a + b > c && b + c > a && c + a > b) ? true : false


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Number of People in the Bus 7/25/22

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.



//solution
var number = function(busStops){
  // Good Luck!
  return busStops.reduce( (acc, passengers) => acc + (passengers[0] - passengers[1]), 0)
}

//completed//

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////