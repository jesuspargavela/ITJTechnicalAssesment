/*
  This code establishes to pointers: one at the beginning of the array and at the end of the array.  
  We iterate the array and check if the current index is different than the right pointer and also check if its sum
  is equal to the target. If both cases return true, it returns the tuple. If not, then we increase the rightPointer variable by one.
  If the right pointer is equal to the array length we reassign rightPointer to 1 and increase i variable by one and continue with the next
  element. If it does not find the target number, it return [-1, -1] because it didn´t find the indices that sum the target number.

  Constraints:
  2 <= nums.length <= 10^4
  -10^9 <= nums[i] <= 10^9
  -10^9 <= target <= 10^9
  Only one valid answer exists
*/

  //Time and space complexity = o(n) time | o(n) space
  function findIndicesOfTargetValue(array: number[], target: number): [number, number]{
    let rightPointer = 1;

    for (let i = 0; i < array.length;) {

        if(rightPointer === array.length){
            rightPointer = 1;
            i++;
        }

        if( (i !== (array.length - rightPointer)) && (array[i] + array[array.length - rightPointer]) === target) 
            return [i, array.length - rightPointer];
        
        rightPointer++;   
    
    }

    return [-1, -1];
}

console.log(findIndicesOfTargetValue([2], 9));
console.log(findIndicesOfTargetValue([2, 11], 9));
console.log(findIndicesOfTargetValue([2, 7, 11, 15], 9));
console.log(findIndicesOfTargetValue([2, 7, 11, 15], 2));
console.log(findIndicesOfTargetValue([3, 2, 4], 6));
console.log(findIndicesOfTargetValue([3, 2, 4], 2));
console.log(findIndicesOfTargetValue([3, 3], 6));
console.log(findIndicesOfTargetValue([3, 3], 5));
console.log(findIndicesOfTargetValue([3, 3, 3], 6));
console.log(findIndicesOfTargetValue([3, 3, 3], 6));
console.log(findIndicesOfTargetValue([3, 3, 3], 5));
console.log(findIndicesOfTargetValue([-1], -1));
console.log(findIndicesOfTargetValue([-1, -1], -1));
console.log(findIndicesOfTargetValue([-1, -2], -2));
console.log(findIndicesOfTargetValue([-1, -2], -3));
console.log(findIndicesOfTargetValue([-1, 2], 1));
console.log(findIndicesOfTargetValue([2, -1], 1));
console.log(findIndicesOfTargetValue([-2, -7, -11, -15], -9));
console.log(findIndicesOfTargetValue([-2, -7, -11, -15], -17));
console.log(findIndicesOfTargetValue([-2, 7, 11, -15], 9));
console.log(findIndicesOfTargetValue([2, -7, -11, 15], 5));
console.log(findIndicesOfTargetValue([2, -7, -11, 15], -5));
