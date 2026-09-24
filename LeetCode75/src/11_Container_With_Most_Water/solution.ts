function maxArea(height: number[]): number {
    let i = 0, j = height.length - 1, best = 0;
    while (i < j) {

        let curHeight = Math.min(height[i], height[j]);
        let curWidth = j - i
        best = Math.max(best, curHeight * curWidth)
        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    return best
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
