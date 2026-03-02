let input1 = 100;
let input2 = 24;

let value1 = Number(input1);
let value2 = Number(input2);

if (!isNaN(value1) && !isNaN(value2)) {
    if (value1 >= 0 && value1 <= 100 && value2 >= 0 && value2 <= 100) {
        let result = value1 + value2;
        console.log("Result is: ", result);
    } else {
        console.log("Inputs must be between 0 and 100.");
    }
} else {
    console.log("Invalid input. Please enter valid numbers.");
}