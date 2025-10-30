/*
 * @lc app=leetcode id=28 lang=c
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
int strStr(char* haystack, char* needle) {
	int haystackLength = strlen(haystack);
	int needleLength = strlen(needle);

	for (int index = 0; index < haystackLength && haystackLength - index >= needleLength; ++index)
		for (int needleIndex = 0; needleIndex < needleLength;) {
			if (haystack[index + needleIndex] != needle[needleIndex])
				break;
			if (++needleIndex == needleLength)
				return index;
		}
	return -1;
}
// @lc code=end

