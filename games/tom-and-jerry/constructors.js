export function Character(name, hp, atk, defense) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        console.log(`${this.name} tấn công ${target.name} gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`);
    };
    this.isAlive = () => {
        return this.hp > 0;
    }
}