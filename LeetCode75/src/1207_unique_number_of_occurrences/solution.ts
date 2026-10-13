function uniqueOccurrences(arr: number[]): boolean {
    const countMap = new Map<number, number>()

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);

    }
    const seenFrequencies = new Set<number>();

    for (const frequency of countMap.values()) {
        if (seenFrequencies.has(frequency)) {
            return false;
        }
        seenFrequencies.add(frequency);
    }
    return true
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
