import {Board, color} from "./colorLines.js";
import {Queue} from "./queue.js";
import readline from "readline";
import {exit} from "process";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let b = new Board();

for (let i = 0; i < 5; i++) {
    let colorNumber = Math.floor(Math.random() * 7);
    switch (colorNumber) {
        case 0:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.red + " ";
            break;
        case 1:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.pink + " ";
            break;
        case 2:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.orange + " ";
            break;
        case 3:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.yellow + " ";
            break;
        case 4:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.green + " ";
            break;
        case 5:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.blue + " ";
            break;
        case 6:
            b.matrix[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = color.orange + " ";
            break;
    }
}

b.toString();

let flag = true;

console.log("\nPRESS\n s for start \n q for quit");

(function wait() {
    if (flag) {
        setTimeout(wait, 2000);
    } else {
        exit();
    }
})();

function listen() {
    rl.question("Enter a command : ", (answer) => {
        func(answer);
        listen();
    });
};

listen();

function func(s) {
    switch (s) {
        case 's':
            console.log("started");
            listen1();
            break;
        case 'q':
            console.log("quited");
            flag = false;
            rl.close();
            break;
    }
}

function listen1() {
    rl.question("Enter a source and destination they must be in format` example. 1 8 2 6 : \n", (answer) => {
        gaming(answer);
        listen1();
    });
};

function gaming(answer) {
    let playerScore = 0;
    if (answer === 'q') {
        console.log("quited");
        flag = false;
        rl.close();
    }
    let source1 = answer.split(" ")[0];
    let source2 = answer.split(" ")[1];
    let dest1 = answer.split(" ")[2];
    let dest2 = answer.split(" ")[3];

    if (checkMove(source1, source2, dest1, dest2)) {
        b.matrix[dest1][dest2] = b.matrix[source1][source2];
        b.matrix[source1][source2] = '* ';
        if (removeBalls(dest1, dest2)) {
            playerScore += 10;
            b.toString();
            listen1();
        } else {
            add3RandomBalls();
            if (boardIsFull()) {
                console.log(`GAME OVER: Your score is ${playerScore}`);
                flag = false;
                rl.close();
            } else {
                b.toString();
                listen1();
            }
        }
    } else {
        console.log("Your input is impossible to complete.Please write correct coordinates");
        b.toString();
        listen1();
    }
}

//checking is it possible to move ball from s1,s2 to d1,d2
function checkMove(s1, s2, d1, d2) {
    if (b.matrix[d1][d2] !== '* ' || b.matrix[s1][s2] === '* ') {
        return false;
    }
    let booleanMatrix = [];
    for (let i = 0; i < 10; i++) {
        booleanMatrix[i] = [];
        for (let j = 0; j < 10; j++) {
            booleanMatrix[i][j] = false;
        }
    }
    let q = new Queue();
    booleanMatrix[s1][s2] = true;
    q.enqueue([s1, s2])

    while (!q.isEmpty()) {
        let obj = q.dequeue();
        let x = obj[0];
        let y = obj[1];
        if ((x + 1) < 10 && b.matrix[x + 1][y] === '* ' && booleanMatrix[x + 1][y] === false) {
            booleanMatrix[x + 1][y] = true;
            q.enqueue([x + 1, y]);
        }
        if ((x - 1) >= 0 && b.matrix[x - 1][y] === '* ' && booleanMatrix[x - 1][y] === false) {
            booleanMatrix[x - 1][y] = true;
            q.enqueue([x - 1, y]);
        }
        if ((y - 1) >= 0 && b.matrix[x][y - 1] === '* ' && booleanMatrix[x][y - 1] === false) {
            booleanMatrix[x][y - 1] = true;
            q.enqueue([x, y - 1]);
        }
        if ((y + 1) < 10 && b.matrix[x][y + 1] === '* ' && booleanMatrix[x][y + 1] === false) {
            booleanMatrix[x][y + 1] = true;
            q.enqueue([x, y + 1]);
        }
    }
    return booleanMatrix[d1][d2];
}

//checking if is filled 5+ diagonals||horizontal||vertical and removing its (making '* ')
function removeBalls(x, y) {
    let countForHorizontal = 0;
    let firstHorizontalMatches = 0;
    let flagHorizontal = false;
    for (let i = 0; i < 10; ++i) {
        if (b.matrix[x][i] === b.matrix[x][y]) {
            ++countForHorizontal;
            if (flagHorizontal) {
                firstHorizontalMatches = i;
                flagHorizontal = false;
            }
        } else {
            if (countForHorizontal >= 5) {
                break;
            }
            countForHorizontal = 0;
            if (!flagHorizontal) {
                flagHorizontal = true;
                firstHorizontalMatches = NaN;
            }
        }
    }

    let countForVertical = 0;
    let firstVerticalMatches = 0;
    let flagVertical = false;
    for (let i = 0; i < 10; ++i) {
        if (b.matrix[i][y] === b.matrix[x][y]) {
            ++countForVertical;
            if (flagVertical) {
                firstVerticalMatches = i;
                flagVertical = false;
            }
        } else {
            if (countForVertical >= 5) {
                break;
            }
            countForVertical = 0;
            if (!flagVertical) {
                flagVertical = true;
                firstVerticalMatches = NaN;
            }
        }
    }

    if (!isNaN(firstHorizontalMatches) && countForHorizontal >= 5) {
        for (let i = firstHorizontalMatches; i < countForHorizontal; i++) {
            b.matrix[x][i] = '* ';
        }
        return true;
    }
    if (!isNaN(firstVerticalMatches) && countForVertical >= 5) {
        for (let i = firstVerticalMatches; i < countForVertical; i++) {
            b.matrix[i][y] = '* ';
        }
        return true;
    }

    //diagonals arent done

    return false;
}

//adding 3 random balls
function add3RandomBalls() {

    for (let i = 0; i < 3; i++) {
        let colorNumber = Math.floor(Math.random() * 7);
        let randomCell1 = Math.floor(Math.random() * 10);
        let randomCell2 = Math.floor(Math.random() * 10);

        while (b.matrix[randomCell1][randomCell2] !== '* ') {
            randomCell1 = Math.floor(Math.random() * 10);
            randomCell2 = Math.floor(Math.random() * 10);
        }
        switch (colorNumber) {
            case 0:
                b.matrix[randomCell1][randomCell2] = color.red + " ";
                break;
            case 1:
                b.matrix[randomCell1][randomCell2] = color.pink + " ";
                break;
            case 2:
                b.matrix[randomCell1][randomCell2] = color.orange + " ";
                break;
            case 3:
                b.matrix[randomCell1][randomCell2] = color.yellow + " ";
                break;
            case 4:
                b.matrix[randomCell1][randomCell2] = color.green + " ";
                break;
            case 5:
                b.matrix[randomCell1][randomCell2] = color.blue + " ";
                break;
            case 6:
                b.matrix[randomCell1][randomCell2] = color.orange + " ";
                break;
        }
        if (removeBalls(randomCell1, randomCell2)) {
            add3RandomBalls();
        }
    }
}

//check if board is full or not
function boardIsFull() {
    let emptyCells = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (b.matrix[i][j] === '* ') {
                ++emptyCells;
            }
        }
    }
    return emptyCells <= 3;
}
