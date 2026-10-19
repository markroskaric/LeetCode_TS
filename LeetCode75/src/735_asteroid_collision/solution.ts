function asteroidCollision(asteroids: number[]): number[] {
    let prev = -1;
    for (let i = 0; i < asteroids.length; i++) {
        let notSame = true;
        if (asteroids[i] > 0) {
            asteroids[++prev] = asteroids[i];
        } else {
            while (prev >= 0 && asteroids[prev] > 0) {
                if (asteroids[prev] < -asteroids[i]) {
                    prev--;
                } else if (asteroids[prev] === -asteroids[i]) {
                    prev--;
                    notSame = false;
                    break;
                } else {
                    break;
                }
            }

            if (notSame && (prev < 0 || asteroids[prev] < 0)) {
                asteroids[++prev] = asteroids[i];
            }
        }
    }
    return asteroids.slice(0, prev + 1);
};

console.log(asteroidCollision([5, 10, -5]))
