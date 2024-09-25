/**
 * Tom and Jerry
 * Health (HP): máu
 * Attack power (atk): chỉ số tấn công
 */

const tom = {
    name: 'Tom',
    hp: 1000,
    atk: 100,
    attack(target) {
        target.hp -= this.atk;
        console.log(`${this.name} tấn công ${target.name} gây ${this.atk} sát thương. ${target.name} còn ${target.hp} máu.`);
    },
    isAlive() {
        return this.hp > 0;
    }
}

const jerry = {
    name: 'Jerry',
    hp: 40000,
    atk: 50,
    attack(target) {
        target.hp -= this.atk;
        console.log(`${this.name} tấn công ${target.name} gây ${this.atk} sát thương. ${target.name} còn ${target.hp} máu.`);
    },
    isAlive() {
        return this.hp > 0;
    }
}

let round = 1;
while (tom.isAlive() && jerry.isAlive()) {
    console.log(`Round ${round}:`)
    if (round % 2 == 0) {
        tom.attack(jerry);
    } else {
        jerry.attack(tom);
    }
    round++;
}

if (tom.isAlive()) {
    console.log(`${tom.name} thắng!`);
} else {
    console.log(`${jerry.name} thắng!`)
}