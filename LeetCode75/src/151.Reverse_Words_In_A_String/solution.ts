function reverseWords(s: string): string {
    s = s.trim().replace(/\s+/g, " ");
    let words = s.split(" ")
    let len = words.length - 1
    for (let i = 0, j = len; i < j; i = i + 1, j = j - 1) {
        [words[i], words[j]] = [words[j], words[i]]
    }
    return words.join(" ")
}

console.log(reverseWords("a good   example"));
