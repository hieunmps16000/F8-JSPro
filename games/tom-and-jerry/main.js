import { Character } from "./constructors.js";
import { battle } from "./games.js";

const tom = new Character('Tom', 1000, 50, 5);
const jerry = new Character('Jerry', 500, 20, 20);

battle(tom, jerry);
