/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
	const aNumber = BigInt(`0b${a}`);
	const bNumber = BigInt(`0b${b}`);
	const result = aNumber + bNumber;
	return result.toString(2);
}
// @lc code=end
// @leetcode:omit_below
/*
function addBinary(a: string, b: string): string {
	const length = a.length >= b.length ? a.length : b.length;
	const binary: number[] = Array.from({ length: length }, () => 0);
	while (a.length < length) a = "0" + a;
	while (b.length < length) b = "0" + b;
	for (let index = length - 1; index > 0; --index) {
		binary[index] += Number(a[index]) + Number(b[index]);
		if (index > 0 && binary[index] > 1) {
			binary[index - 1] += 1;
			binary[index] -= 2;
		}
	}
	binary[0] += Number(a[0]) + Number(b[0]);
	if (binary[0] > 1) {
		binary[0] = binary[0] - 2;
		binary.unshift(1);
	}
	return binary.join("");
}
*/
