import { expect } from "jsr:@std/expect";
import { day1partOne, day1PartTwo } from "../solutions/day1.ts";
import { readPuzzleInput, readTestInput } from "../utils/file_utils.ts";

Deno.test({
    name: "1-1 (Test): Expect distance to be 11",
    permissions: { read: true },
    fn: async () => {
        const expected = 11;
        const distance = day1partOne(await readTestInput(1));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "1-1 (Puzzle): Expect distance to be 2580760",
    permissions: { read: true },
    fn: async () => {
        const expected = 2580760;
        const distance = day1partOne(await readPuzzleInput(1));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "1-2 (Test): Expect distance to be 31",
    permissions: { read: true },
    fn: async () => {
        const expected = 31;
        const distance = day1PartTwo(await readTestInput(1));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "1-2 (Puzzle): Expect distance to be 25358365",
    permissions: { read: true },
    fn: async () => {
        const expected = 25358365;
        const distance = day1PartTwo(await readPuzzleInput(1));

        expect(distance).toBe(expected);
    },
});
