let counter = 0;
while(counter < 51) {
    console.log(counter);
    counter = counter +1;
}

let counter1 = 0;

while (counter1 > -51) {
    console.log(counter1);
    counter1 = counter1 -1;
}

let counter2 = 0;
while(counter2 < 101) {
    console.log(counter2);
    counter2 = counter2 +2;
}

let ball_players = [`abe`, `homer`, `bart`];
let counter3 = 0;
while(counter3 < ball_players.length) {
    console.log(ball_players[counter3]);
    counter3 = counter3 +1;
}

let player_scores = [100, 77, 88];
let counter4 = 0;
while (counter4 < ball_players.length) {
    console.log(`${ball_players[counter4]}  ${player_scores[counter4]}`);
    counter4 = counter4 +1;
}

let player_injured = [false, false, true];
let counter5 = 0;
while (!((counter5 < player_injured.length) && (player_injured[counter5]))) {
    console.log(ball_players[counter5]);
        counter5 = counter5 +1;
}
