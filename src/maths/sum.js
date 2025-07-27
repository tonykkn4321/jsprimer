// Listing 4-41. The Contents of the sum.js:

export default function(values) {
    return values.reduce((total, val) => total + val, 0);    
}