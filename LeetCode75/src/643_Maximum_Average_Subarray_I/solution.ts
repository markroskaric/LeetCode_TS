function findMaxAverage(nums: number[], k: number): number {
    let left = 0, right = 0
    let sum: number = 0
    let maxAvg = Number.NEGATIVE_INFINITY

    while (right < nums.length) {

        sum += nums[right]
        let window = right - left + 1

        if (window == k) {
            maxAvg = Math.max(sum / k, maxAvg)
            sum -= nums[left]
            left++
        }
        right++

    }
    return maxAvg




};


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
