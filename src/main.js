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



createApp(App).mount('#app')
