//  Listing 4-43. The Contents of the operations.js:

export function multiply(values) {
    return values.reduce((total, val) => total * val, 1);

}

export function subtract(amount, values) {
    return values.reduce((total, val) => total - val, amount);

}

export function divide(first, second) {
    return first / second;

}
