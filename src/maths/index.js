// Listing 4-47. The Contents of the index.js:

import addition from "./sum";

export function mean(values) {
    return addition(values)/values.length;

}

export { addition };
export * from "./operations";
