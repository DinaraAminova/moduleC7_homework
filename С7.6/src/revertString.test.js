import { revertString } from './revertStr';

describe('test for revertString function', () => {
    const firstStr = "Hello!";
    const revFirstStr = "!olleH";
    const secondStr = "Hello, world!";
    const revSecondStr = "!dlrow ,olleH";

    it ('should return reversed "Hello!" and "Hello, world!"', () => {
        expect(revertString(firstStr)).toBe(`The result is ${revFirstStr}`);
        expect(revertString(secondStr)).toBe(`The result is ${revSecondStr}`)
    });
})
