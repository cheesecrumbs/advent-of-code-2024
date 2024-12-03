const FILE_PATH =
    "/home/markus/Developing/AdventOfCode2024/src/resource/day3.txt";

export async function day3_1() {
    const text = await Deno.readTextFile(FILE_PATH);
    const mulRegex = /mul\(\d*,\d*\)/gm;

    return text.match(mulRegex)?.map((match) =>
        match.replace("mul(", "").replace(")", "").split(",").map((val) =>
            Number(val)
        ).reduce((a, b) => a * b)
    ).reduce((a, b) => a + b);
}
