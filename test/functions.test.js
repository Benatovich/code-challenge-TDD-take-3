// IMPORT MODULES under test here:
import { 
    // myFunction,
    addExclamationPoints, divideThenMultiply, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString, getLastItem, getRandomNumber,
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

// divideThenMultiply tests
test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 'should return 10');
});
console.log(divideThenMultiply(8, 4, 5));

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 500;

    const actual = divideThenMultiply(10, 2, 100);

    expect.equal(actual, expected, 'should return 500');
});
console.log(divideThenMultiply(10, 2, 100));

test('divideThenMultiply should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 220;

    const actual = divideThenMultiply(100, 5, 11);

    expect.equal(actual, expected, 'should return 220');
});
console.log(divideThenMultiply(100, 5, 11));

// returnAsAnArray tests
// NOTE: these tests require .deepEqual instead of .equal
test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'should return [8, 4, 5]');
});
console.log(returnAsAnArray(8, 4, 5));

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [11, 35, 8];

    const actual = returnAsAnArray(11, 35, 8);

    expect.deepEqual(actual, expected, 'should return [11, 35, 8]');
});
console.log(returnAsAnArray(11, 35, 8));

test('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [22, 1, 19];

    const actual = returnAsAnArray(22, 1, 19);

    expect.deepEqual(actual, expected, 'should return [22, 1, 19]');
});
console.log(returnAsAnArray(22, 1, 19));

// returnAsAString tests
test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '22119';

    const actual = returnAsAString(22, 1, 19);

    expect.equal(actual, expected, 'should return "22119"');
});
console.log(returnAsAString(22, 1, 19));

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '123';

    const actual = returnAsAString(1, 2, 3);

    expect.equal(actual, expected, 'should return "123"');
});
console.log(returnAsAString(1, 2, 3));

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '915';

    const actual = returnAsAString(9, 1, 5);

    expect.equal(actual, expected, 'should return "915"');
});
console.log(returnAsAString(9, 1, 5));

// makeLuckyGreeting tests
test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 9.';

    const actual = makeLuckyGreeting(1, 8);

    expect.equal(actual, expected, 'should return "Hello! Your lucky number for the day is 9."');
});
console.log(makeLuckyGreeting(1, 8));

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 15.';

    const actual = makeLuckyGreeting(6, 9);

    expect.equal(actual, expected, 'should return "Hello! Your lucky number for the day is 15."');
});
console.log(makeLuckyGreeting(6, 9));

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today\'s lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 10.';

    const actual = makeLuckyGreeting(3, 7);

    expect.equal(actual, expected, 'should return "Hello! Your lucky number for the day is 10."');
});
console.log(makeLuckyGreeting(3, 7));

// getSecondItem tests
test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'plum', 'peach']);

    expect.equal(actual, expected, 'should return "apple"');
});
console.log(getSecondItem(['kiwi', 'apple', 'plum', 'peach']));

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected = 'pineapple';

    const actual = getSecondItem(['kiwi', 'pineapple', 'plum']);

    expect.equal(actual, expected, 'should return "pineapple"');
});
console.log(getSecondItem(['kiwi', 'pineapple', 'plum']));

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected = 'rat';

    const actual = getSecondItem(['dog', 'rat', 'lizard', 'cow']);

    expect.equal(actual, expected, 'should return "rat"');
});
console.log(getSecondItem(['dog', 'rat', 'lizard', 'cow']));

// getLastItem tests
test('getLastItem should take an array and return the last item in the array regardless of array length', (expect) => {
    const expected = 'cow';

    const actual = getLastItem(['dog', 'rat', 'lizard', 'cow']);

    expect.equal(actual, expected, 'should return "cow"');
});
console.log(getLastItem(['dog', 'rat', 'lizard', 'cow']));

test('getLastItem should take an array and return the last item in the array regardless of array length', (expect) => {
    const expected = 'peach';

    const actual = getLastItem(['kiwi', 'apple', 'plum', 'peach']);

    expect.equal(actual, expected, 'should return "peach"');
});
console.log(getLastItem(['kiwi', 'apple', 'plum', 'peach']));

test('getLastItem should take an array and return the last item in the array regardless of array length', (expect) => {
    const expected = 'rat';

    const actual = getLastItem(['dog', 'rat']);

    expect.equal(actual, expected, 'should return "rat"');
});
console.log(getLastItem(['dog', 'rat']));

// getRandomNumber tests
test('getRandomNumber should generate a random integer between 0 and 5', (expect) => {
    const expected = 'number';
    const actual = typeof getRandomNumber();
    expect.equal(actual, expected, 'should return "number"');
    const expected2 = true;
    const actual2 = 0 <= actual <= 5;
    expect.equal(actual2, expected2, 'should return true');
});
console.log(getRandomNumber());



skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

