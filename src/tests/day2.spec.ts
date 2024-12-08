import { expect } from "jsr:@std/expect/expect";
import { readPuzzleInput, readTestInput } from "../utils/file_utils.ts";
import { day2partOne, day2partTwo } from "../solutions/day2.ts";

Deno.test({
    name: "2-1 (Test): Expect distance to be 2",
    permissions: { read: true },
    fn: async () => {
        const expected = 2;
        const distance = day2partOne(await readTestInput(2));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "2-1 (Puzzle): Expect distance to be 402",
    permissions: { read: true },
    fn: async () => {
        const expected = 402;
        const distance = day2partOne(await readPuzzleInput(2));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "2-2 (Test): Expect distance to be 4",
    permissions: { read: true },
    fn: async () => {
        const expected = 4;
        const distance = day2partTwo(await readTestInput(2));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "2-2 (Puzzle): Expect distance to be 455",
    permissions: { read: true },
    fn: async () => {
        const expected = 455;
        const distance = day2partTwo(await readPuzzleInput(2));

        expect(distance).toBe(expected);
    },
});
