const FILE_PATH =
  "/home/markus/Developing/AdventOfCode2024/src/resource/day1.csv";

export default async function day1() {
  const { first, second } = await readFile();
  const diff = [];

  for (let index = 0; index < first.length; index++) {
    const firstVal = first[index];
    const secondVal = second[index];
    diff.push(
      firstVal > secondVal ? firstVal - secondVal : secondVal - firstVal,
    );
  }
  
  return diff.reduce((a, b) => a + b);
}

interface FileContent {
  first: number[];
  second: number[];
}

async function readFile(): Promise<FileContent> {
  const text = await Deno.readTextFile(FILE_PATH);
  const values = text.split(";");

  const listOne = [];
  const listTwo = [];

  for (let index = 0; index < values.length; index++) {
    const value = Number(values[index]);
    if (index % 2 === 0) {
      listOne.push(value);
    } else {
      listTwo.push(value);
    }
  }

  return {
    first: listOne.toSorted(),
    second: listTwo.toSorted(),
  };
}
