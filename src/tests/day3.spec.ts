import { expect } from "jsr:@std/expect/expect";
import { day3partOne, day3partTwo } from "../solutions/day3.ts";
import { readPuzzleInput, readTestInput } from "../utils/file_utils.ts";

Deno.test({
    name: "3-1 (Test): Expect distance to be 161",
    permissions: { read: true },
    fn: async () => {
        const expected = 161;
        const distance = day3partOne(await readTestInput(3));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "3-1 (Puzzle): Expect distance to be 185797128",
    permissions: { read: true },
    fn: async () => {
        const expected = 185797128;
        const distance = day3partOne(await readPuzzleInput(3));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "3-2 (Test): Expect distance to be 48",
    permissions: { read: true },
    fn: async () => {
        const expected = 48;
        const distance = day3partTwo(await readTestInput(3));

        expect(distance).toBe(expected);
    },
});

Deno.test({
    name: "3-2 (Puzzle): Expect distance to be 89798695",
    permissions: { read: true },
    fn: async () => {
        const expected = 89798695;
        const distance = day3partTwo(await readPuzzleInput(3));

        expect(distance).toBe(expected);
    },
});
