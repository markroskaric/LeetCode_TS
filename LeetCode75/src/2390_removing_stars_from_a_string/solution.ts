function removeStars(s: string): string {
    let stack: string[] = []

    for (let a of s) {
        if (a != '*') {
            stack.push(a);
        } else if (stack.length > 0) {
            stack.pop()
        }
    }
    return stack.join('');
};

console.log(removeStars("leet**cod*e"))
