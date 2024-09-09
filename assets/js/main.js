import { isAscending } from "./functions.js";

console.log(isAscending([1, 3, 5, 7])) // true
console.log(isAscending([1, 3, 3, 7])) // false
console.log(isAscending([1, 3, 7, 5])) // false
console.log(isAscending([1, 7, 3, 5])) // false
