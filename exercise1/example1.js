// reduce function to work as for loop
const numbers= [1,2,3,4,5,6,7,8,9];
const sumReducer = (initialValue,currentValue) => initialValue + currentValue;

const sum = numbers.reduce(sumReducer,1);

console.log('Sum of array elements'+ sum);


// for loop to sum all the numbers
var preval = 1;
var sumOfNum = 0;
for(let i=0; i<numbers.length; i++){
    sumOfNum = preval + numbers[i];
    preval = sumOfNum;
}

console.log(sumOfNum);