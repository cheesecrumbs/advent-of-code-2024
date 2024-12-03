const FILE_PATH =
    "/home/markus/Developing/AdventOfCode2024/src/resource/day3.txt";

export async function day3_1() {
    const text = await Deno.readTextFile(FILE_PATH);
    const mulRegex = /mul\(\d*,\d*\)/gm;

    return mapMatchesToResult(text.match(mulRegex), mulRegex);
}

export async function day3_2() {
    const text = await Deno.readTextFile(FILE_PATH);
    const mulRegex = /mul\(\d*,\d*\)/gm;
    const doAndDontMulRegex = /(mul\(\d*,\d*\))|don't\(\)(.|\n)+?(do\(\))/gm;

    const validMatches = text.match(doAndDontMulRegex)?.filter((match) =>
        !match.startsWith("don't()")
    ).flatMap((validMatch) => validMatch);

    return mapMatchesToResult(validMatches, mulRegex);
}

function mapMatchesToResult(
    matches: RegExpExecArray | string[] | null | undefined,
    regExp: RegExp,
): number | undefined {
    return matches?.flatMap((match) => match.match(regExp))
        .filter((match) => match !== null)
        .map((match) =>
            match.replace("mul(", "").replace(")", "").split(",").map((val) =>
                Number(val)
            ).reduce((a, b) => a * b)
        ).reduce((a, b) => a + b);
}
