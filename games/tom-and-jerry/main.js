import { Character } from "./constructors.js";
import { battle } from "./games.js";

const tom = new Character('Tom', 1000, 50, 5, 20, 0.8);
const jerry = new Character('Jerry', 500, 20, 20, 40, 0.5);


battle(tom, jerry);
