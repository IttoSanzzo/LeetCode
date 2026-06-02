/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
	const triplets: number[][] = [];
	nums = nums.sort((a, b) => a - b);

	for (let coreIndex = 0; coreIndex < nums.length - 2; ++coreIndex) {
		if (nums[coreIndex] > 0) break;
		if (nums[coreIndex] == nums[coreIndex - 1]) continue;
		let left = coreIndex + 1;
		let right = nums.length - 1;

		while (left < right) {
			const result = nums[coreIndex] + nums[left] + nums[right];
			if (result < 0) ++left;
			else if (result > 0) --right;
			else {
				triplets.push([nums[coreIndex], nums[left++], nums[right--]]);
				while (left < right && nums[left] == nums[left - 1]) ++left;
				while (right > left && nums[right] == nums[right + 1]) --right;
			}
		}
	}
	return triplets;
}
// @lc code=end

// @leetcode:omit_start
/*

function threeSum(nums: number[]): number[][] {
	const triplets = new Map<string, number[]>();
	const values = new Map<number, number[]>();
	let removedCount = 0;
	nums = nums.filter((value, index) => {
		const valueIndexes =
			values.get(value) ?? values.set(value, [0, 0]).get(value)!;
		if (valueIndexes[0] < 3) {
			++valueIndexes[0];
			valueIndexes[1] = index - removedCount;
			return true;
		}
		++removedCount;
		return false;
	});

	for (let index1 = 0; index1 < nums.length - 2; ++index1) {
		for (let index2 = index1 + 1; index2 < nums.length - 1; ++index2) {
			const lacking = -(nums[index1] + nums[index2]);
			if (!values.has(lacking) || values.get(lacking)![1] <= index2) continue;
			const newTriplet = [nums[index1], nums[index2], lacking].sort();
			triplets.set(
				`${newTriplet[0]}|${newTriplet[1]}|${newTriplet[2]}`,
				newTriplet,
			);
		}
	}
	return [...triplets.values()];
}

*/
// @leetcode:omit_end
