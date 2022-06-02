export function revertString(string) {
    const revertString = string.split("").reverse().join("");
    return "The result is " + revertString;
}
