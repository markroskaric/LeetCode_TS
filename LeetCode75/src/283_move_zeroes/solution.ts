function moveZeroes(nums: number[]): void {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {

        while (left < right && nums[left] != 0) {
            left++
        }
        if (nums[right] != 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
        }

    }
};
/**
 Do not return anything, modify nums in-place instead.
 */
console.log(moveZeroes([0, 1, 0, 3, 12]))
