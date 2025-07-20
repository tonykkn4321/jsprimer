//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')
console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

function myFunc(name, weather="raining", ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg:" + extraArgs[i]);
    }
}
myFunc("Adam", "sunny", "one", "two", "three");

function returnFunc(nameFunction) {
    return ("Hello " + nameFunction() + ".");
}
console.log(returnFunc(function () {
    return "Adam";
}));

function printName(nameFunction, printFunction) {
    printFunction(returnFunc(nameFunction));

}
printName(function () { return "Adam_1" }, console.log);

const arrowFunc = (nameFunction) => ("Hello " + nameFunction() + ".");
const printArrowName = (nameFunction, printFunction) =>
    printFunction(arrowFunc(nameFunction));
printArrowName(function () { return "Adam_@" }, console.log);
