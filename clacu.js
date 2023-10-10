import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter first number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter secound number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["add", "sub", "mul", "div"],
        message: "Enter first number:",
    },
]);
//console.log(answers);
//console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
if (operation === "add") {
    console.log(`the sum of tow numbers is = ${num1 + num2}`);
}
else if (operation === "sub") {
    console.log(`the sum of tow numbers is = ${num1 - num2}`);
}
else if (operation === "mul") {
    console.log(`the sum of tow numbers is = ${num1 * num2}`);
}
else if (operation === "div") {
    console.log(`the sum of tow numbers is = ${num1 / num2}`);
}
