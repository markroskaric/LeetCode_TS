function increasingTriplet(nums: number[]): boolean {
    let first: number = Number.MAX_SAFE_INTEGER;
    let second: number = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] <= first) {
            first = nums[i];
        } else if (nums[i] <= second) {
            second = nums[i];
        } else {
            return true;
        }
    }
    return false;
}
console.log(increasingTriplet([5, 4, 3, 2, 1]))
