function gcdOfStrings(str1: string, str2: string): string {

    if (str1 + str2 != str2 + str1) {
        return "";
    }

    let a = str1.length, b = str2.length;

    while (b > 0) {
        [a, b] = [b, a % b];

    }
    return str1.slice(0, a);
}
console.log(gcdOfStrings("ABCABC", "ABC"));
