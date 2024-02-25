#!/usr/bin/node
/*
    Print a square with the character #

The size of the square must be the first argument
of the program.
*/

if (process.argv.length !== 3) {
    console.error("Usage: ./1-print_square.js <size>");
    console.error("Example: ./1-print_square.js 8");
    process.exit(1);
}

const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
    console.error("Size must be a positive integer");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '#';
    }
    console.log(row);
}
