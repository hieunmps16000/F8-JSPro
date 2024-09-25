export function battle(char1, char2) {
    let round = 1;
    while (char1.isAlive() && char2.isAlive()) {
        if (round % 2 === 0) {
            char1.attack(char2);
        } else {
            char2.attack(char1);
        }
        round++;
    }
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} chiến thắng!`);
    return winner;
}