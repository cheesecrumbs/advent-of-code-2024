export function day3partOne(fileContent: string): number | undefined {
    const mulRegex = /mul\(\d*,\d*\)/gm;

    return mapMatchesToResult(fileContent.match(mulRegex), mulRegex);
}

export function day3partTwo(fileContent: string): number | undefined {
    const mulRegex = /mul\(\d*,\d*\)/gm;
    const doAndDontMulRegex = /(mul\(\d*,\d*\))|don't\(\)(.|\n)+?(do\(\))/gm;

    const validMatches = fileContent.match(doAndDontMulRegex)?.filter((match) =>
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
