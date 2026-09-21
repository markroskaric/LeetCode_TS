function compress(chars: string[]): number {
    let n = chars.length;
    let idx = 0;
    let i = 0;

    while (i < n) {
        let ch = chars[i];
        let count = 0;
        while (i < n && ch == chars[i]) {
            count++;
            i++;
        }
        if (count == 1) {
            chars[idx] = ch;
            idx++;
        } else {

            chars[idx] = ch;
            idx++;

            for (let digit of count.toString()) {
                chars[idx] = digit;
                idx++;
            }

        }


    }
    return idx
};



console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']))
