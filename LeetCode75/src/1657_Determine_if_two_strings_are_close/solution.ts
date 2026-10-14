function closeStrings(word1: string, word2: string): boolean {
    if (word1.length != word2.length) {
        return false
    }
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);
    for (let i = 0; i < word1.length; i++) {
        let charCode = word1.charCodeAt(i) - 97;
        freq1[charCode]++;
        charCode = word2.charCodeAt(i) - 97;
        freq2[charCode]++;
    }
    for (let i = 0; i < 26; i++) {
        if ((freq1[i] == 0 && freq2[i] != 0) || (freq2[i] == 0 && freq1[i] != 0)) {
            return false
        }
    }
    freq1.sort((a, b) => b - a)
    freq2.sort((a, b) => b - a)
    for (let i = 0; i < 26; i++) {
        if (freq1[i] != freq2[i]) {
            return false
        }
    }
    return true



};

console.log(closeStrings("abc", "bca"))
