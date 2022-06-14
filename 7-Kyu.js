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




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////