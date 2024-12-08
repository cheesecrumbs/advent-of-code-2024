export function day2partOne(fileContent: string): number {
    const lines = linesFromFileContent(fileContent);

    let safeLevels = 0;

    for (let index = 0; index < lines.length; index++) {
        const element = lines[index];
        if (isSafe(element)) {
            safeLevels++;
        }
    }

    return safeLevels;
}

export function day2partTwo(fileContent: string): number {
    const lines = linesFromFileContent(fileContent);
    let safeLevels = 0;

    for (let index = 0; index < lines.length; index++) {
        const element = lines[index];
        const allElementVariations = [];
        allElementVariations.push(element);

        for (let index = 0; index < element.length; index++) {
            const copy = element.slice();
            copy.splice(index, 1);
            allElementVariations.push(copy);
        }

        for (let index = 0; index < allElementVariations.length; index++) {
            if (isSafe(allElementVariations[index])) {
                safeLevels++;
                break;
            }
        }
    }

    return safeLevels;
}

function isSafe(line: number[]): boolean {
    for (let index = 0; index < line.length; index++) {
        const current = line[index];
        const next = index === line.length - 1 ? null : line[index + 1];
        const previous = index === 0 ? null : line[index - 1];

        if (next === null) {
            return true;
        }

        const diff = current - next;
        const previousDiff = previous === null ? 0 : previous - current;

        if ((diff < 0 && previousDiff > 0) || (diff > 0 && previousDiff < 0)) {
            return false;
        }

        const absoluteDiff = Math.abs(diff);
        if (absoluteDiff < 1 || absoluteDiff > 3) {
            return false;
        }
    }

    return true;
}

function linesFromFileContent(fileContent: string): number[][] {
    const split = fileContent.split("\n");
    const lines = [];

    for (let index = 0; index < split.length; index++) {
        const element = split[index];
        lines.push(element.split(" ").map((line) => Number(line)));
    }

    return lines;
}
