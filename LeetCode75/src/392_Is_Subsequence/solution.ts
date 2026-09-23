function isSubsequence(s: string, t: string): boolean {

    let idx = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[idx]) {
            idx++
        }
        if (idx == s.length) {
            return true
        }
    }
    return s.length == 0
};


console.log(isSubsequence("abc", "ahbgdc"))
