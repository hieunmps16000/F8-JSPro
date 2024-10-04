function battleRound(attacker, defender) {
    attacker.attack(defender);
    if (defender.isAlive() && attacker.isAlive()) {
        defender.attack(attacker);  
    } 
}

export function battle(char1, char2) {
    let round = 1;
    while (char1.isAlive() && char2.isAlive()) {
        console.log(`Vòng ${round}:`);
        if (char1.speed > char2.speed) {
            battleRound(char1, char2)
        } else if (char2.speed > char1.speed) {
            battleRound(char2, char1);
        } else {
            if (Math.random() < 0.5) {
                battleRound(char1, char2);
            } else {
                battleRound(char2, char1);
            }
        }
        round++;
    }
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} chiến thắng!`);
    return winner;
}