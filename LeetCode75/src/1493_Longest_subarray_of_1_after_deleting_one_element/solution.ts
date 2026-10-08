function longestSubarray(nums: number[]): number {
    let k = 1, maxOne = 0, i = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] == 0) {
            k--
        }
        while (k < 0) {
            if (nums[i] == 0) {
                k++
            }
            i++

        }
        maxOne = Math.max(index - i, maxOne)

    }
    return maxOne


};

console.log(longestSubarray([1, 1, 0, 1]));
