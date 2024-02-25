#!/usr/bin/node
/*
    Print a square with the character #

The size of the square must be the first argument
of the program.
*/

const MAX_SIZE = 1000; // Define a maximum reasonable size

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

if (size > MAX_SIZE) {
    console.warn("Warning: The specified size may be too large.");
}

const MAX_CONSOLE_WIDTH = 200; // Define maximum console width for formatting
const hashLine = '#'.repeat(size); // Create a line of hashes

if (size > MAX_CONSOLE_WIDTH) {
    console.warn("Warning: The specified size may cause formatting issues on the console.");
}

for (let i = 0; i < size; i++) {
    console.log(hashLine);
}
