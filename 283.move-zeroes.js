/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let lastIndex = 0;
	while (lastIndex < nums.length - 1 && nums[lastIndex] !== 0)
		++lastIndex;
	for (let index = lastIndex + 1; index < nums.length; ++index) {
		if (nums[index] !== 0) {
			nums[lastIndex++] = nums[index];
			nums[index] = 0;
		}
	}

};