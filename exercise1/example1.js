// Find the sum of all odd numbers

// const arr = [1,2,3,4,5,6,7,8,9,0];

// const func1 = arr.reduce(sumOfOddNum, 0)
// const sumOfOddNum = (array) => {}

const numbers= [1,2,3,4,5,6,7,8,9,11,12,13,15,18,48];
const sumReducer = (initialValue,currentValue) => initialValue + currentValue;

const sum = numbers.reduce(sumReducer,0);

console.log('Sum of array elements'+ sum);