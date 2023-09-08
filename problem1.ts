
/*
  This code establishes an array that will include every integer that is not in the array by 
  using a cont variable assigned to 1 iterating the cont variable each time and evaluating the cont variable
  is in the array and also checking if cont variable is less than or equal to the length of the array. If both cases
  return true, then we add cont variable to the numbersThatAreNotInNumsArray variable and then return the array.
 
 Constraints:
 n == nums.length
 1 <= n <= 10^5
 1 <= nums[i] <= n
*/
  
  
  //Time and space complexity = o(n) time | o(n) space
  function numbersThatAreNotInNumsArray(nums: number[]): number[] {
    const numbersThatAreNotInNumsArray: number[] = [];

    let cont = 1;

    for (let i = 0; i < nums.length; i++){
        if(!(nums.includes(cont)) && cont <= nums.length) numbersThatAreNotInNumsArray.push(cont);
        cont++;    
    }

    return numbersThatAreNotInNumsArray;
}

console.log(numbersThatAreNotInNumsArray([4, 3, 2, 7, 8, 2, 3, 1])); 
console.log(numbersThatAreNotInNumsArray([1000, 4, 12, 2, 7, 8, 2, 3, 1])); 
console.log(numbersThatAreNotInNumsArray([1000, 4, 9, 2, 7, 8, 2, 3, 1])); 
console.log(numbersThatAreNotInNumsArray([1, 1]));
console.log(numbersThatAreNotInNumsArray([1]));
console.log(numbersThatAreNotInNumsArray([2]));
console.log(numbersThatAreNotInNumsArray([5, 4, 1000, 3]));
console.log(numbersThatAreNotInNumsArray([5, 14, 1000, 3]));
console.log(numbersThatAreNotInNumsArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(numbersThatAreNotInNumsArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 2]));
