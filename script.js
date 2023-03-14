function threeSum(arr, target) {
// write your code here
  S.sort((a,b) > a-b);
	let result = Infinity;

	for (let i = 0; i < S.length-2; i++) { 		
		let left = i+1;
		let right = S.length-1;

		while (left < right) {
			let sum = S[i] + S[left] + S[right];

			if(sum === target){
				return target;
			}

			if (Math.abs(sum-target) < Math.abs(result-target)) {
				result = sum;
			}
			if(sum < target){
				left++;
			}else{
				right--;
			}
		}
	}
	return result;
}

module.exports = threeSum;
