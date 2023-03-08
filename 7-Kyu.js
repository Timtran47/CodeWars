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


//String ends with? 7/26/22

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//solution
function solution(str, ending){
  if( ending === ""){
    return true
  }else{
  return str.slice(-ending.length) === ending
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Odd or Even?  7/27/22

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"




//solution
function oddOrEven(array) {
  let sumOfArray = array.reduce( (acc, n) => acc + n, 0 )
  if(sumOfArray === 0 || array === [] || sumOfArray % 2 === 0){
    return "even"
  }else{
    return "odd"
  }
}

//completed



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Divide and Conquer 7/28

// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.



//solution
function divCon(x){
  
  //obtain value of the sum of numbers
  let numberValue = x.filter(value => typeof value === 'number').reduce( (acc, n) => acc + n, 0)
  
  //filter for only string values and convert to a number in a new array
  let stringValueArray = x.filter( value => typeof value === 'string').map(value => Number(value))
  
  //obtain the sum of the string values
  
  let stringValueTotal = stringValueArray.reduce( (acc, n) => acc + n, 0)
  
  return numberValue - stringValueTotal
    
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Reverse Words 7/29/22

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


//solution
function reverseWords(str) {
  return str.split(" ").reverse().join(" ").split("").reverse().join("")
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Love vs friendship 8/2/22

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.




//solution
function wordsToMarks(string){
  //your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = 0;
  
  for (let i = 0; i < string.length; i += 1) {
    result += (alphabet.indexOf(string[i]) + 1);
  }
  
  return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Switcheroo 8/4/2022

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//Solution
function switcheroo(x){
  return x.split('').map( function(e){
    if (e =='b'){return 'a'}
    else if( e == 'a'){return 'b'}
    else if ( e == 'c'){
      return 'c'
    }
  }).join('')
}

//

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Remove the Minimum 8/12/22

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//solution
function removeSmallest(numbers) {
  const copy = numbers.slice(0)
  let smallestValue = numbers.indexOf(Math.min(...numbers))
  copy.splice(smallestValue, 1);
  return copy
 }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//The highest profit wins! 8/13/22


// has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


//solution
function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sorty arry by string length.  8/15/22

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


//solution
const sortByLength = array => array.sort( (a,b) => a.length - b.length)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Testing 1-2-3   8/21/22


// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]




//solution
var number=function(array){
  if (array.length == 0 ){
    return []
  }else{
    return array.map( function(item, idx){
      return (idx + 1) + ": " + item
    })
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Small Enough? - Beginner 8/23/22


// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers



//solution


function smallEnough(a, limit){
  //filtering an array for values lower than the limit
  let filteredResults = a.filter( value => value <= limit)
  //if the length of filtered array is the same as the initial array length, then true
  if ( filteredResults.length == a.length){
    return true
  }else{
    return false
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Multiply Word in String  8/24/22


// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string",3,5) 
// Should return

// "string-string-string-string-string"

// Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

// Simple. Good luck.


//solution

function modifyMultiply (str,loc,num) {
  //split the string into an array to target the word at the location
  let strArray = str.split(' ')
  
  // pull the word at the loc argument
  let target = strArray[loc] + "-"
  
  //repeat the value of the array num times but remove the last "-"
  return target.repeat(num).slice( 0, -1)
  }

  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Find the Capitals 8/28/22


// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



//solution
const capitals = word => word.split('') // split word into an array

  .map((letter, idx) => letter === letter.toUpperCase() ? idx : false)
  // return a new array that gives the index of the capital letter

  .filter(num => Number.isInteger(num));
  // filter through each item in the new array and return 
  // a newer array of just the index values




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//anagram dtection 8/28/22
 
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"



//solution
// write the function isAnagram
var isAnagram = function(test, original) {
  
  const t = test.toUpperCase().split('').sort().join('')
  const o= original.toUpperCase().split('').sort().join('')
  return (o == t) ? true :false
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Stanton Measure 9/7/22

  // The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

  // Write a function which takes an integer array and returns its Stanton measure.

  // Examples
  // The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

  // The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.



//solution

function stantonMeasure(arr){
  //calculate how many times the number 1 appears in the original array
  let n = arr.filter( item => item == 1).length
  return arr.filter(item => item == n).length
}


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////'

  //Find the middle element 9/19/22
  
  //   As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

  // The input to the function will be an array of three distinct numbers (Haskell: a tuple).

  // For example:

  // gimme([2, 3, 1]) => 0
  // 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

  // Another example (just to make sure it is clear):

  // gimme([5, 10, 14]) => 1
  // 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



  //solution

  function gimme (triplet) {
  
    //obtain middle value of the original array by sorting the three initial values
    let middleValue = triplet.slice().sort((a,b) => a-b)[1]
    
    //obtain the position of the middle value in the original array
    return triplet.indexOf(middleValue)
      
    }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Two Oldest Ages 9/20/22

  // The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

  // The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
  
  // For example (Input --> Output):
  
  // [1, 2, 10, 8] --> [8, 10]
  // [1, 5, 87, 45, 8, 8] --> [45, 87]
  // [1, 3, 10, 0]) --> [3, 10]


  //solution
    // return the two oldest/oldest ages within the array of ages passed in.
  function twoOldestAges(ages){
  //order array from lowest to highest
  let orderedArray = ages.sort((a,b) => a - b)
  //return last two position values in order 
  return orderedArray.slice(-2)
}
  




  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Alternate Capilization 10/2/22


  //   Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

  // For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

  // The input will be a lowercase string with no spaces.

  // Good luck!

  // If you like this Kata, please try:



  //solution

  function capitalize(s){
    let even = s.split('').map((c,i) => 
          i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
      ).join('')
    
    let odd = s.split('').map((c,i) => 
          i % 2 == 1 ? c.toLowerCase() : c.toUpperCase()
      ).join('')
    
    return [odd, even]
  };


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //Remove duplicate words 10/6/22

//   Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


//solution


const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Bumps in the Road     10/7/2022

  // Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

  // Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


  // solution
  
  function bump(x){
    let count = x.split('n').length
    if(count > 16){
      return "Car Dead"
    }else{
      return "Woohoo!"
    }
    
   }






  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //emove anchor from URL 10/18/2022

//   Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//solution
function removeUrlAnchor(url){
  return url.split('#')[0];
}

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Find the middle element 11/14/2022

//   As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.


//solution

function gimme (triplet) {

  //sorting changes the original array so you need to do a slice to grab the value 
  let middleValue = triplet.slice().sort((a,b)=> a - b)[1]

  return triplet.indexOf(middleValue)
}

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //The average length 11/16/2022

  Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

  // A few examples:

  // ['u', 'y'] =>  ['u', 'y'] // average length is 1
  // ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
  // ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
  // If the average length is not an integer, use Math.round().
  // The input array's length > 1

  //solution
  
  function averageLength(x) { 
    //calculate average length by finding the length of combined characters divided by the number of instances in the original array
    let average = Math.round(x.join('').length/ x.length)
    
    
    return x.map( x => x[0].repeat(average))
  
  }



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Remove consecutive duplicate words 

  // Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

  // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  
  // --> "alpha beta gamma delta alpha beta gamma delta"

  //solution
  const removeConsecutiveDuplicates = s => s.split(' ').filter( (value, index, arr) => value !== arr[index + 1]).join(' ')



  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Simple Fun #176: Reverse Letter


//   Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string



//solution
function reverseLetter(str) {
 
  //remove all non-letters
  const cleanStr= str.replace(/[^a-z]/gi,'').split('').reverse().join('')
  return cleanStr
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.



//solution
function sumTwoSmallestNumbers(numbers) {  
  let sortedArr = numbers.sort( (a,b)=> a-b)
  return sortedArr[0] + sortedArr[1]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  - Factorial 1/18/23

// n mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.


//solution
const factorial = n => {
  if (n <= 1) return 1;
  
  return n * factorial(n - 1);
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Recursion # 2 - Fibonacci 1/20/23


// ##2 - Fibonacci number

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

// f(n) = f(n-1) + f(n-2)

// with seed values

// f(1) = 1 and f(2) = 1

// #Your task

// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.



//solution
function fibonacci(n){
  if (n <= 2){
    return 1
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}


/
//memoization solution//

const memo = {}
function fibonacci(n) {
    if(n <= 1){
        return n
    }else if( memo[n] ){
        return memo[n]
    }else{
        let result = fibonacci(n - 1) + fibonacci(n - 2)
        memo[n] = result
        return result
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Greatest common divisor 1/31/2023


// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1


function mygcd(x,y){
  for( let i = Math.min(x,y); i > 0 ; i--){
    if ( x % i === 0 && y % i === 0){
      return i
    }
  }
}


//recursive version

function mygcd(x,y){
  if( y === 0 ){
    return x
  }
  return mygcd(y, x % y)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Implementing a Queue

//using array methods
class Queue {
  constructor() {
    this.list = []
  }
  
  size() {
    return this.list.length
  }
  
  enqueue(item) {
    this.list.push(item)
  }
  
  dequeue() {
    return this.list.shift()
  }
}


//more efficient implementation
class Queue {
  constructor() {
    this.storage = {}
    this.head = 0
    this.tail = 0
  }
  enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
  }
  dequeue() {
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"



//solution
function divisors(integer) {
  let answers = []
  for( let i = 2; i < integer; i++){
    if( integer % i == 0){
      answers.push(i)
    }
  }return answers.length !== 0 ? answers : `${integer} is prime`
};







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Trimming a String 
//Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.



//solution
const trim = (str, size) => {
  if(str.length <= size) return str
  if(size <= 3)return str.slice(0,size) + '...'
  if(size > 3) return str.slice(0,size-3)+'...' 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Be Concise I - The Ternary Operator 3/6/2023

// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)


//solution
const describeAge=age=>age<=12?"You're a(n) kid":age>12&&age<18?"You're a(n) teenager":age>17&&age< 65?"You're a(n) adult":"You're a(n) elderly"

//optimal
// function describeAge(age) {
//   return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Odd-Even String Sort 3.29

// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'


//solution

function sortMyString(S) {
  //break up the string into array
  const stringArr = S.split('')
  
  //filter for even indexs
  let even = stringArr.filter(((e,i)=>i%2 === 0)).join('')
  
  //filter for odd indexes
  let odd = stringArr.filter((e,i)=>i%2 === 1).join('')

  return `${even} ${odd}`
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





