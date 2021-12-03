// IMPORT MODULES under test here:
import { 
    // myFunction,
    addExclamationPoints, multiplyBy12ThenHalve, multiplyBySeven,
} from '../functions.js';


const { test, skip } = QUnit;

// addExclamationPoints tests
test('addExclamationPoints should take a string and add !!! to the end', (expect) => {
    const expected = 'someString' + '!!!';
    
    const actual = addExclamationPoints('someString');
    
    expect.equal(actual, expected, 'should return someString!!!');
});
console.log(addExclamationPoints('someString'));

test('addExclamationPoints should take a string and add !!! to the end', (expect) => {
    const expected = 'bunny' + '!!!';
    
    const actual = addExclamationPoints('bunny');
    
    expect.equal(actual, expected, 'should return bunny!!!');
});
console.log(addExclamationPoints('bunny'));

test('addExclamationPoints should take a string and add !!! to the end', (expect) => {
    const expected = 'it even works if the string is longer' + '!!!';
    
    const actual = addExclamationPoints('it even works if the string is longer');
    
    expect.equal(actual, expected, 'should return "it even works if the string is longer!!!"');
});
console.log(addExclamationPoints('it even works if the string is longer'));

// multiplyBySeven tests
test('multiplyBySeven function should take an input and multiply it by seven', (expect) => {
    const expected = 49;

    const actual = multiplyBySeven(7);

    expect.equal(actual, expected, 'should return 49');
});
console.log(multiplyBySeven(7));
test('multiplyBySeven function should take an input and multiply it by seven', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected, 'should return 21');
});
console.log(multiplyBySeven(3));
test('multiplyBySeven function should take an input and multiply it by seven', (expect) => {
    const expected = 77;

    const actual = multiplyBySeven(11);

    expect.equal(actual, expected, 'should return 77');
});
console.log(multiplyBySeven(11));

// multiplyBy12ThenHalve tests
// can the function just multiply by six instead? 'num * 6' vs 'num * 12 / 2'
test('multiplyBy12ThenHalve function should take an input, multiply it by twelve, then divide by 2', (expect) => {
    const expected = 42;

    const actual = multiplyBy12ThenHalve(7);

    expect.equal(actual, expected, 'should return 42');
});
console.log(multiplyBy12ThenHalve(7));

test('multiplyBy12ThenHalve function should take an input, multiply it by twelve, then divide by 2', (expect) => {
    const expected = 60;

    const actual = multiplyBy12ThenHalve(10);

    expect.equal(actual, expected, 'should return 60');
});
console.log(multiplyBy12ThenHalve(10));

test('multiplyBy12ThenHalve function should take an input, multiply it by twelve, then divide by 2', (expect) => {
    const expected = 72;

    const actual = multiplyBy12ThenHalve(12);

    expect.equal(actual, expected, 'should return 72');
});
console.log(multiplyBy12ThenHalve(12));


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

