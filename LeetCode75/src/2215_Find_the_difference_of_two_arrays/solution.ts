function findDifference(nums1: number[], nums2: number[]): number[][] {
    const uniqueNum1 = new Set(nums1);
    const uniqueNum2 = new Set(nums2);

    const diff1 = [...uniqueNum1].filter((num) => !uniqueNum2.has(num))
    const diff2 = [...uniqueNum2].filter((num) => !uniqueNum1.has(num))

    return [diff1, diff2]
};

console.log(findDifference([1, 2, 3], [2, 4, 6]))
