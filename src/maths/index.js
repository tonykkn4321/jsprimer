// Listing 4-47. The Contents of the index.js:

import addition from "./sum";

export function mean(values) {
    return addition(values)/values.length;

}

export { addition };
export * from "./operations";

//  Listing 4-50. Adding a Function in the index.js:
export function asyncAdd(values) {
    setTimeout(() => {
    let total = addition(values);
    console.log(`Async Total: ${total}`);
return total;
}, 500);
}


// Listing 4-52. Using a Promise in the index.js :
export function asyncAdd_promise(values) {
    return new Promise((callback) => {
        setTimeout(() => {
        let total = addition(values);
        console.log(`Async_promise Total: ${total}`);
        callback(total);
        }, 500);
    });
}