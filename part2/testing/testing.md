# Testing document for javascript code:

## leap years testing

The testing values are: 2000, 1900, 2024, 2022.

The expected results are: True, false, True, False

The following is the javascript code for leap-years.js

```javascript
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
   

console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2022)); 
```
The results are:![Results for leap year program](../Images%20testing/Screenshot%202024-03-18%20190530.png) 

## long-names testing:

The testing values are: ['jane', 'alexanderthegreat', 'tahsinmaklaithegreat', 'christopher']

The expected results are: ['alexanderthegreat', 'tahsinmaklaithegreat']

The following is the javascript code for long-names.js

``` javascript
const names = ['jane', 'alexanderthegreat', 'tahsinmaklaithegreat', 'christopher'];
const newStr = [];

function filterNames(namesArray) {
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i].length > 12) {
            newStr.push(namesArray[i]);
        }
    }
}

filterNames(names);
console.log(newStr);





```
The result is:
The results are:![Results for leap year program](../Images%20testing/long%20names.png) 

The result with no name above 12 letters:const names = ['jane', 'alexander', 'tahsinmaklai', 'christopher'];

The result is:
![Results for leap year program](../Images%20testing/long%20names%202.png) 

## pyramid

The testing values are: 3,5

The expected results are: ['alexanderthegreat', 'tahsinmaklaithegreat']

The following is the javascript code for pyramid.js

```javascript
function pyramid(number){
    const pyramid = [];

    for (let i = 0; i < number; i++) {
        let str1 = ' '.repeat(number - i - 1); 
        let str2 = '@'.repeat(i * 2 + 1); 
        pyramid.push(str1 + str2 +str1);

    }
    return pyramid
}
const result = pyramid(5);
result.forEach(level => console.log(level))
```

The result for 5 is:
![Pyramids with number 5](../Images%20testing/pyramids%205.png)

The result for 3 is:
![Pyramids with number 3](../Images%20testing/pyramids%203.png)


## title case

The testing values are: "my name is tahsin"

The expected results are: My Name Is Tahsin

The following is the javascript code for title-case.js

```javascript
function title(string){
    const words = string.split(" ");

    for (let i = 0; i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");



}

const orgString = "my name is tahsin"
console.log(orgString)
const result = title(orgString)
console.log(result)



```

The results are:
![title-case result](../Images%20testing/title.png)

## evenNumbers

The testing values are: [2,4,6,8,10]

The expected results are: True

The following is the javascript code for even-numbers.js
```javascript
const numbers = [8, 6, 4, 3, 10];
const notEven = [];

// Function to determine if a number is even
function isEven(number) {
    return number % 2 === 0;
}

function even(numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (!isEven(numbersArray[i])) {
            notEven.push(numbersArray[i]);
        }
    }
}

// Call the even function with the numbers array
even(numbers);

// Check if the notEven array is empty
const allEven = notEven.length === 0;

console.log("Array contains only even numbers:", allEven);
```

The results are:
![even numbers true](../Images%20testing/even%20numbers%20true.png)

The testing values are: [3,4,6,8,10]

The expected results are: False

the real results are:

![even numbers  false](../Images%20testing/even%20numbers%20false.png)