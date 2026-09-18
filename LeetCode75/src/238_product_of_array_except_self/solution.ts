function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let prefix: number[] = [];
    let suffix: number[] = [];
    let result: number[] = [];
    prefix[0] = 1;
    suffix[n - 1] = 1;
    //prefix
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    //suffix
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    //result
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
