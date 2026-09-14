
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = [];
    let biggest = candies[0];
    candies.forEach((a) => {
        if (a > biggest) {
            biggest = a;
        }
    });
    let min = biggest - extraCandies;

    candies.forEach((k) => {
        if (k < min) {
            result.push(false);
        } else {
            result.push(true);
        }
    });
    return result;
};



console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
