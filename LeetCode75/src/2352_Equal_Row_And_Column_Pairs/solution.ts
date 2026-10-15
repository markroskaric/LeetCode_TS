function equalPairs(grid: number[][]): number {
    const n = grid.length;
    const rowMap = new Map<string, number>();

    for (let i = 0; i < n; i++) {
        const key = grid[i].join(',');
        rowMap.set(key, (rowMap.get(key) || 0) + 1);
    }

    let res = 0;
    for (let j = 0; j < n; j++) {
        const col: number[] = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j]);
        }
        const key = col.join(',');
        if (rowMap.has(key)) {
            res += rowMap.get(key)!;
        }
    }

    return res;
}

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
