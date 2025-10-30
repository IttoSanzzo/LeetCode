/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
	let fizzBuzz: string[] = [];
	for (let index = 1; index <= n; ++index) {
		const fizz = index % 3 == 0;
		const buzz = index % 5 == 0;
		if (fizz && buzz) fizzBuzz.push("FizzBuzz");
		else if (fizz) fizzBuzz.push("Fizz");
		else if (buzz) fizzBuzz.push("Buzz");
		else fizzBuzz.push(String(index));
	}
	return fizzBuzz;
}
// @lc code=end
