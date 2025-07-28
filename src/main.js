import { createApp } from 'vue'
import App from './App.vue'

// Listing 4-42. Using a Simple JavaScript Module:
import additionFunction from "./maths/sum"

// Listing 4-46. Importing an Entire Module:
import { multiply, subtract } from "./maths/operations"

// Listing 4-46. Importing an Entire Module:
import * as ops from "./maths/operations";

//  Listing 4-48. Importing an Entire Module in the main.js:
import * as math from "./maths";

// Listing 4-51. Performing Background Work:
import { asyncAdd } from "./maths";

// Listing 4-52. Using a Promise in the index.js:
import { asyncAdd_promise } from "./maths";


let values = [10, 20, 30, 40, 50];

// Listing 4-42. Using a Simple JavaScript Module:
let total = additionFunction(values);
console.log(`Total: ${total}`);

// Listing 4-46. Importing an Entire Module:
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);

// Listing 4-46. Importing an Entire Module:
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);

//  Listing 4-48. Importing an Entire Module in the main.js:
console.log(`Sum: ${math.addition(values)}`);
console.log(`Multiply: ${math.multiply(values)}`);
console.log(`Subtract: ${math.subtract(1000, values)}`);
console.log(`Mean: ${math.mean(values)}`);

// Listing 4-51. Performing Background Work:
let total_async = asyncAdd(values);
console.log(`Main ASYNC Total: ${total_async}`);

// Listing 4-52. Using a Promise in the index.js:
let total_async_promise = asyncAdd_promise(values);
console.log(`Main ASYNC Promise Total: ${total_async_promise}`);

// Listing 4-53. Observing a Promise in the main.js:
asyncAdd_promise(values).then(total_async_promise => console.log(`Main ASYNC Promise Total: ${total_async_promise}`));


// Listing 4-54. Using async and await in the main.js:
async function doTask() {
    let total = await asyncAdd_promise(values);
    console.log(`Main Simplied Async Total: ${total}`);
}

doTask();

createApp(App).mount('#app')
