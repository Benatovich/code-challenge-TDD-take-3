// IMPORT MODULES under test here:
import { 
    // myFunction,
    addExclamationPoints, multiplyBySeven,
} from '../functions.js';
console.log(addExclamationPoints('bunny'));


const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = 'someString' + '!!!';

    const actual = addExclamationPoints('someString');

    expect.equal(actual, expected);
});

test('multiplyBySeven function should take an input and multiply it by seven', (expect) => {
    const expected = 49;

    const actual = multiplyBySeven(7);

    expect.equal(actual, expected, 'should return 49');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

