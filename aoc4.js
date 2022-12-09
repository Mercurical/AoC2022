const R = require('ramda');
const input = require('./input/aoc4.input');

// Part 1

const doesOneSectionContainOther = ([first, second]) =>
    R.head(first) <= R.head(second) && R.last(first) >= R.last(second) || 
    R.head(second) <= R.head(first) && R.last(second) >= R.last(first)
    ? 1 
    : 0;

const resultPart1 = R.pipe(
    R.split("\n"),
    R.map(R.split(",")),
    R.map(R.map(R.split("-"))),
    R.map(R.map(R.map(parseInt))),
    R.map(doesOneSectionContainOther),
    R.sum,
)(input);

console.log(`Number of pairs where one section contains the other: ${resultPart1}`);

// Part 2

const doSectionsOverlap = ([first, second]) => R.last(first) < R.head(second) || R.last(second) < R.head(first) ? 0 : 1;

const resultPart2 = R.pipe(
    R.split("\n"),
    R.map(R.split(",")),
    R.map(R.map(R.split("-"))),
    R.map(R.map(R.map(parseInt))),
    R.map(doSectionsOverlap),
    R.sum,
)(input);

console.log(`Number of pairs where sections overlap: ${resultPart2}`);