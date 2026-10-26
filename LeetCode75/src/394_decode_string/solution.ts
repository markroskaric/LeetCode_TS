function decodeString(s: string): string {
    const stack: [number, string][] = []
    let currentString = ''
    let currentMultiplier = 0

    for (let ch of s) {
        if (ch === '[') {
            stack.push([currentMultiplier, currentString])
            currentMultiplier = 0
            currentString = ''
        } else if (ch === ']') {
            const [prevMultiplier, prevString] = stack.pop()
            currentString = prevString + currentString.repeat(prevMultiplier)
        } else if (!isNaN(Number(ch))) {
            currentMultiplier = currentMultiplier * 10 + +ch
        } else {
            currentString += ch
        }
    }

    return currentString
};

console.log(decodeString("3[a]2[bc]"));
