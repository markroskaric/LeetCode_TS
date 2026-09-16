function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    let length = flowerbed.length;

    for (let i = 0; i < length; i++) {

        let left = i == 0 || flowerbed[i - 1] == 0;
        let right = i == length - 1 || flowerbed[i + 1] == 0;

        if (left && right && flowerbed[i] == 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    return n <= 0;
}

console.log(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0));
