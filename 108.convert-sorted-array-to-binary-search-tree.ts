/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
// @leetcode:omit_start
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
// @leetcode:omit_end
function appendNode(
	nums: number[],
	leftLimit: number,
	rightLimit: number
): TreeNode | null {
	if (leftLimit == rightLimit) return new TreeNode(nums[leftLimit - 1]);
	const middle = leftLimit + Math.ceil((rightLimit - leftLimit) / 2);
	if (middle == rightLimit)
		return new TreeNode(
			nums[rightLimit - 1],
			new TreeNode(nums[leftLimit - 1])
		);
	return new TreeNode(
		nums[middle - 1],
		appendNode(nums, leftLimit, middle - 1),
		appendNode(nums, middle + 1, rightLimit)
	);
}
function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (nums.length == 0) return null;
	return appendNode(nums, 1, nums.length);
}
// @lc code=end
// @leetcode:omit_below
// function sortedArrayToBST(nums: number[]): TreeNode | null {
// 	if (nums.length == 0) return null;
// 	let dummy = new TreeNode(nums[0]);
// 	let head = dummy;
// 	const middle = Math.floor(nums.length / 2);
// 	for (let index = 1; index < nums.length; ++index) {
// 		if (index <= middle) dummy = new TreeNode(nums[index], dummy);
// 		else dummy = dummy.right = new TreeNode(nums[index]);
// 		if (index == middle) head = dummy;
// 	}
// 	return head;
// }
