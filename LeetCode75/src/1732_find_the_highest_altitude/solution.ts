function largestAltitude(gain: number[]): number {
    let sum = 0, maxAltitude = 0;

    for (let index = 0; index < gain.length; index++) {
        sum = sum + gain[index]
        maxAltitude = Math.max(sum, maxAltitude)

    }
    return maxAltitude

};

console.log(largestAltitude([-5, 1, 5, 0, -7]))
