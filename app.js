// const tutorial = require('./tutorial');
// console.log(tutorial.PI);
// console.log(tutorial.sum(3,5));
// console.log(new tutorial.SomeObject());

//readLine Module
const readline = require('readline');
const rl = readline.createInterface({
    //config files
    input : process.stdin,
    output: process.stdout
})

let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

let answer = num1 + num2;

rl.question(`what is ${num1} + ${num2} \n?`,(inp) => {
    if(inp.trim() == answer)
    rl.close();
    else{
        rl.setPrompt('Try Again! \n');
        rl.prompt();
        rl.on('line', (inp)=> {
            if(inp.trim() == answer) rl.close();
            else {
                rl.setPrompt('Try Again! \n');
                rl.prompt();
            }
        })
    }
});

rl.on('close', () => {
    console.log("Correct");
});