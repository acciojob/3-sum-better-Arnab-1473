function threeSum(arr, target) {
// write your code here
 arr.sort((a, b) => a - b);
  
  // initialize variables to keep track of the minimum difference and the sum of the three integers
  let minDiff = Infinity;
  let closestSum = 0;
  
  // loop through the array, selecting each integer as the first of the three
  for (let i = 0; i < arr.length - 2; i++) {
    // initialize two pointers, one at the beginning of the remaining array and one at the end
    let left = i + 1;
    let right = arr.length - 1;
    
    // loop while the left pointer is less than the right pointer
    while (left < right) {
      // calculate the sum of the three integers
      let sum = arr[i] + arr[left] + arr[right];
      
      // calculate the difference between the sum and the target
      let diff = Math.abs(sum - target);
      
      // if the difference is smaller than the current minimum difference, update the minimum difference and the closest sum
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      
      // if the sum is greater than or equal to the target, move the right pointer to the left to decrease the sum
      if (sum >= target) {
        right--;
      } 
      // if the sum is less than the target, move the left pointer to the right to increase the sum
      else {
        left++;
      }
    }
  }
  
  // return the closest sum
  return closestSum;
}

module.exports = threeSum;
