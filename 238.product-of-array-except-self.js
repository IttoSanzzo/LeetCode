"use strict";
/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */
// @lc code=start
function productExceptSelf(nums) {
    const result = new Array(nums.length).fill(1);
    console.log(result);
    for (let index = 0; index < nums.length; ++index) {
        if (index < nums.length - 1)
            result[index] = nums[index + 1];
        if (index > 0)
            result[index] *= nums[index - 1];
    }
    console.log(result);
    for (let index = nums.length - 2; index > 0; --index) {
        result[index] *= nums[index + 1];
        // if (index > 0) result[index] *= nums[index - 1];
    }
    console.log(result);
    return result;
}
// @lc code=end
// @leetcode:omit_start
/*
result.push(
    nums.reduce((acc, val, i) => {
        if (i == index) return acc;
        return (acc *= val);
    }, 1),
);
*/
// @leetcode:omit_end
