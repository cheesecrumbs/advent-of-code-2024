export function day1partOne(fileContent: string) {
    const left: number[] = [];
    const right: number[] = [];
    const diff = [];

    fileContent.split("\n")
        .map((row) => row.split("   ").map((num) => Number(num)))
        .flatMap((pair) => [...pair])
        .forEach((num, i) => {
            i % 2 === 0 ? left.push(num) : right.push(num);
        });

    left.sort();
    right.sort();

    for (let index = 0; index < left.length; index++) {
        const leftVal = left[index];
        const rightVal = right[index];
        diff.push(
            leftVal > rightVal ? leftVal - rightVal : rightVal - leftVal,
        );
    }

    return diff.reduce((a, b) => a + b);
}

export function day1PartTwo(fileContent: string) {
    const left: number[] = [];
    const right: number[] = [];
    const diff = [];

    fileContent.split("\n")
        .map((row) => row.split("   ").map((num) => Number(num)))
        .flatMap((pair) => [...pair])
        .forEach((num, i) => {
            i % 2 === 0 ? left.push(num) : right.push(num);
        });

    const counts: Map<number, number> = new Map();

    for (const num of right) {
        counts.get(num)
            ? counts.set(num, counts.get(num)! + 1)
            : counts.set(num, 1);
    }

    for (let index = 0; index < left.length; index++) {
        const leftVal = left[index];
        diff.push(leftVal * (counts.get(leftVal) ?? 0));
    }

    return diff.reduce((a, b) => a + b);
}
