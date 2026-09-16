function reverseVowels(s: string): string {
    const vowels = "aeiouAEIOU";
    let left = 0, right = s.length - 1;
    const chars = s.split("");
    while (left < right) {

        if (vowels.includes(chars[left]) && vowels.includes(chars[right])) {

            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }

        if (!vowels.includes(chars[left])) {
            left++;
        }
        if (!vowels.includes(chars[right])) {
            right--;
        }
    }
    return chars.join("");
}
console.log(reverseVowels("IceCreAm"));
