class Board{
    matrix = [];
    constructor() {
        for(let i=0; i<10; i++) {
            this.matrix[i] = [];
            for(let j=0; j<10; j++) {
                this.matrix[i][j] = '* ';
            }
        }
    }

    toString(){
        let row = "";
        process.stdout.write("  0 1 2 3 4 5 6 7 8 9 \n")
        for (let i = 0; i < 10; i++) {
            row = "";
            process.stdout.write(i  + " ");
            for(let j = 0; j < 10; j++){
                row += this.matrix[i][j];
            }
            console.log(row);
        }
    }
}

let color = {
    red: 'r',
    pink: 'p',
    orange: 'o',
    yellow: 'y',
    green: 'g',
    blue: 'b',
    white: 'w'
}

export {Board,color};
