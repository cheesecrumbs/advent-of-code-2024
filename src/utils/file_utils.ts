const PROJECT_PATH = "/home/markus/Developing/AdventOfCode2024/src";
const TEST_INPUT_PATH = `${PROJECT_PATH}/tests/resources`;
const PUZZLE_INPUT_PATH = `${PROJECT_PATH}/resources`;

export async function readTestInput(day: number): Promise<string> {
    return await readFileFromResources(`${TEST_INPUT_PATH}/day${day}.txt`);
}

export async function readPuzzleInput(day: number): Promise<string> {
    return await readFileFromResources(`${PUZZLE_INPUT_PATH}/day${day}.txt`);
}

async function readFileFromResources(filePath: string): Promise<string> {
    return await Deno.readTextFile(filePath);
}
