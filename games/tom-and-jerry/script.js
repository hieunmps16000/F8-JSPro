import { Character } from "./constructors.js";

const tom = new Character('Tom', 1000, 50, 5);
const jerry = new Character('Jerry', 500, 20, 20);

tom.attack(jerry);
jerry.attack(tom);