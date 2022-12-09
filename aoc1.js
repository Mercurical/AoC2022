const R = require('ramda');
const input = require('./input/aoc1.input');

// Part 1

const resultPart1 = R.pipe(
    R.split("\n\n"),
    R.map(R.split("\n")),
    R.map(R.sum),
    R.reduce(R.max, -Infinity),
)(input);

console.log(`Elf carrying most calories: ${resultPart1}`);

// Part 2

const resultPart2 = R.pipe(
    R.split("\n\n"),
    R.map(R.split("\n")),
    R.map(R.sum),
    R.sort((a, b) => b - a),
    R.slice(0, 3),
    R.sum,
)(input);

console.log(`Sum of calories carrying by top three elves: ${resultPart2}`);