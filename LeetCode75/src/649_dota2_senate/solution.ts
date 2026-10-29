function predictPartyVictory(senate: string): string {
    let radians: Array<number> = [];
    let dire: Array<number> = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] == 'R') {
            radians.push(i);
        } else {
            dire.push(i);
        }
    }
    while (radians.length > 0 && dire.length > 0) {
        if (radians[0] < dire[0]) {
            radians.push(radians[0] + senate.length)
        } else {
            dire.push(dire[0] + senate.length)
        }
        radians.shift()
        dire.shift()
    }
    return radians.length > 0 ? "Radiant" : "Dire";
};

console.log(predictPartyVictory("RDD"))
