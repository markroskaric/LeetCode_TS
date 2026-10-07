function longestOnes(nums: number[], k: number): number {

    let i = 0;
    let maxwindow = 0;

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
        maxwindow = Math.max(index - i + 1, maxwindow)
    }
    return maxwindow;


};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
