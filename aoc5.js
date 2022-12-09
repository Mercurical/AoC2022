const R = require('ramda');
const input = require('./input/aoc5.input');

const initialState = [
    [],
    ['F', 'H', 'B', 'V', 'R', 'Q', 'D', 'P'],
    ['L', 'D', 'Z', 'Q', 'W', 'V'],
    ['H', 'L', 'Z', 'Q', 'G', 'R', 'P', 'C'],
    ['R', 'D', 'H', 'F', 'J', 'V', 'B'],
    ['Z', 'W', 'L', 'C'],
    ['J', 'R', 'P', 'N', 'T', 'G', 'V', 'M'],
    ['J', 'R', 'L', 'V', 'M', 'B', 'S'],
    ['D', 'P', 'J'],
    ['D', 'C', 'N', 'W', 'V'],
];

const proceedWithMoves = (state, moveFn, moves) => 
    R.isEmpty(moves)
    ? R.identity(state)
    : proceedWithMoves(moveFn(R.head(moves))(state), moveFn, R.tail(moves));

// Part 1

const moveBox = (move, [times, fromIndex, toIndex], state) => 
    R.equals(move, times)
    ? R.identity(state)
    : moveBox(
        R.inc(move),
        [times, fromIndex, toIndex],
        R.compose(
            R.adjust(fromIndex, R.slice(0, -1)),
            R.adjust(toIndex, R.append(R.last(R.nth(fromIndex, state))))
        )(state)
    );

const resultPart1 = R.pipe(
    R.split("\n"),
    R.map(R.match(/[0-9]+/g)),
    R.map(R.map(parseInt)),
    R.curry(proceedWithMoves)(initialState)(R.curry(moveBox)(0)),
    R.map(R.last),
    R.join(''),
)(input);

console.log(`Crates on top of every stack (one box at a time): ${resultPart1}`);

// Part 2

const moveManyBoxes = ([amount, fromIndex, toIndex], state) => 
    R.compose(
        R.adjust(fromIndex, R.slice(0, -1 * amount)),
        R.adjust(
            toIndex,
            (boxesToAppend) => R.concat(
                boxesToAppend,
                R.slice(
                    -1 * amount,
                    R.length(R.nth(fromIndex, state)),
                    R.nth(fromIndex, state),
                ),
            ),
        ),
    )(state);

const resultPart2 = R.pipe(
    R.split("\n"),
    R.map(R.match(/[0-9]+/g)),
    R.map(R.map(parseInt)),
    R.curry(proceedWithMoves)(initialState)(R.curry(moveManyBoxes)),
    R.map(R.last),
    R.join(''),
)(input);

console.log(`Crates on top of every stack (many boxes at once): ${resultPart2}`);