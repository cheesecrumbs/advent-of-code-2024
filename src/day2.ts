const FILE_PATH =
  "/home/markus/Developing/AdventOfCode2024/src/resource/day2.csv";

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

function isSafe(line: number[]): boolean {
  let previousDiff = 0;

  for (let index = 0; index < line.length; index++) {
    const current = line[index];
    const next = index === line.length - 1 ? null : line[index + 1];

    if (next === null) {
      return true;
    }

    const diff = current - next;
    if (previousDiff === 0) {
      previousDiff = diff;
    }

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
