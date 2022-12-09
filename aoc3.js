const R = require('ramda');
const input = require('./input/aoc3.input');

// Part 1

const splitBackpack = backpack => [R.split('', backpack.substr(0, backpack.length / 2)), R.split('', backpack.substr(backpack.length / 2))];
const bothCompartmentItem = ([left, right]) => R.without(R.difference(left, right), left);
const getPriorityEquivalent = letter => letter.match(/[a-z]/) ? letter.charCodeAt(0) - 96 : letter.charCodeAt(0) - 38;

const resultPart1 = R.pipe(
    R.split("\n"),
    R.map(R.compose(R.uniq, bothCompartmentItem, splitBackpack)),
    R.flatten,
    R.map(getPriorityEquivalent),
    R.sum,
)(input);

console.log(`Priority sum of duplicated items: ${resultPart1}`);

// Part 2

const badgeItem = ([first, second, third]) => R.filter(el => R.includes(el, first) && R.includes(el, second) && R.includes(el, third), first); 

const resultPart2 = R.pipe(
    R.split("\n"),
    R.splitEvery(3),
    R.map(R.compose(R.uniq, badgeItem, R.map(R.split('')))),
    R.flatten,
    R.map(getPriorityEquivalent),
    R.sum,
)(input);

console.log(`Priority sum of badge items: ${resultPart2}`);