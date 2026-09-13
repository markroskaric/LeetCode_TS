function mergeAlternately(word1: string, word2: string): string {


    let result: string = "";
    let i: number = 0;
    while (i < word1.length && i < word2.length) {
        result += word1[i] + word2[i];
        i++;
    }
    if (word1.length > i) {
        return result += word1.slice(i);
    } else if (word2.length > i) {
        return result += word2.slice(i);
    }

    return result;
}
console.log(mergeAlternately("abc", "pqr"))

