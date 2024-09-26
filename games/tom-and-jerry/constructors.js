export function Character(name, hp, atk, defense, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed = speed;
    this.counterRate = counterRate;

    // Xử lý tân công
    this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0);

        // Trừ máu
        target.hp -= damage;

        console.log(`${this.name} tấn công ${target.name} gây ra ${damage} sát thương. ${target.name} còn lại ${Math.max(target.hp, 0)} máu.`);

        // Phản đòn của target
        if (target.isAlive() && Math.random() < target.counterRate) {
            // Trừ máu
            const counterDamage = Math.max(target.atk - this.defense, 0);
            this.hp -= counterDamage;
            console.log(`${target.name} phản đòn ${this.name} gây ra ${counterDamage} sát thương. ${this.name} còn lại ${Math.max(this.hp, 0)} máu.`);
        }
    };
    this.isAlive = () => {
        return this.hp > 0;
    }
}