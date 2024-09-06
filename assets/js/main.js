import { compressString } from "./functions.js";

// Sample usage
console.log(compressString("aaabbc")); // a3b2c1
console.log(compressString("aabcccccaaa")); // a2b1c5a3