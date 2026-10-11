function pivotIndex(nums: number[]): number {
    let totalSum = 0, leftSum = 0;
    for (let index = 0; index < nums.length; index++) {
        totalSum += nums[index]
    }

    for (let index = 0; index < nums.length; index++) {
        totalSum = totalSum - nums[index]

        if (totalSum == leftSum) {
            return index
        }
        leftSum += nums[index]

    }
    return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
