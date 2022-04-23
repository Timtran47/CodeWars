// Calculate average


// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//solution

function find_average(array) {
    // your code here
    if (array.length === 0){
    return 0;
    }
      let result = 0
      for (i=0; i<array.length; i++){
        result += array[i] }
    return result/array.length
  }