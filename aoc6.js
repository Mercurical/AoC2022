const R = require('ramda');
const input = require('./input/aoc6.input');

// Part 1

const indexOfDistinctString = (index, noOfDistinctChars, string) => 
    R.equals(
        R.length(R.uniq(R.pipe(R.slice(index, index + noOfDistinctChars), R.split(''))(string))), 
        noOfDistinctChars,
    )
    ? index + noOfDistinctChars
    : indexOfDistinctString(R.inc(index), noOfDistinctChars, string)

const resultPart1 = indexOfDistinctString(0, 4, input);

console.log(`Packet starts after ${resultPart1} characters`);

// Part 2

const resultPart2 = indexOfDistinctString(0, 14, input);

console.log(`Message starts after ${resultPart2} characters`);