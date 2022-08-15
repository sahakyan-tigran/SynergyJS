import { Employee, production } from "./index.js";
import { exit } from "process";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = true;

console.log("press\n getEmployees\n getAvgSalary\n q");

(function wait () {
    if (flag) setTimeout(wait, 1000000);
    else {
        exit();
    }
})();

function listen () {
    rl.question("Enter a command : ", (answer) => {
        func(answer);
        listen();
    });
};

listen();

function func(c) {
    switch(c) {
        case "getEmployees":
            for(let employee of production.employees) {
                console.log(`${employee}`);
            }
            break;
        case "getAvgSalary":
            console.log("Average salary: " + production.getAvgSalary());
            break;
        case "q":
            flag = false;
            rl.close();
            break;
        default:
            console.log("press\n getEmployees\n getAvgSalary\n q");
            break;
    }
}