const FILE_PATH =
  "/home/markus/Developing/AdventOfCode2024/src/resource/day2.txt";

export async function day2_1() {
  const lines = await readFile();

  let safeLevels = 0;

  for (let index = 0; index < lines.length; index++) {
    const element = lines[index];
    if (isSafe(element)) {
      safeLevels++;
    }
  }

  return safeLevels;
}

/**
 * Fucking brute force this shit cause I'm tired.
 */
export async function day2_2() {
  const lines = await readFile();

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

async function readFile() {
  const text = await Deno.readTextFile(FILE_PATH);
  const split = text.split("\n");
  const lines = [];

  for (let index = 0; index < split.length; index++) {
    const element = split[index];
    lines.push(element.split(" ").map((line) => Number(line)));
  }

  return lines;
}
