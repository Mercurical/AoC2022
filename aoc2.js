const R = require('ramda');
const input = require('./input/aoc2.input');

// Part 1

const possibleOutcomesPart1 = {
    'A X': 3 + 1,
    'A Y': 6 + 2,
    'A Z': 0 + 3,
    'B X': 0 + 1,
    'B Y': 3 + 2,
    'B Z': 6 + 3,
    'C X': 6 + 1,
    'C Y': 0 + 2,
    'C Z': 3 + 3,
};

const resultPart1 = R.pipe(
    R.split("\n"),
    R.map(el => possibleOutcomesPart1[el]),
    R.sum,
)(input);

console.log(`Total points from strategy (unexplained): ${resultPart1}`);

// Part 2

const possibleOutcomesPart2 = {
    'A X': 0 + 3,
    'A Y': 3 + 1,
    'A Z': 6 + 2,
    'B X': 0 + 1,
    'B Y': 3 + 2,
    'B Z': 6 + 3,
    'C X': 0 + 2,
    'C Y': 3 + 3,
    'C Z': 6 + 1,
};

const resultPart2 = R.pipe(
    R.split("\n"),
    R.map(el => possibleOutcomesPart2[el]),
    R.sum,
)(input);

console.log(`Total points from strategy (explained): ${resultPart2}`);