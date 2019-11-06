// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n){
    let arr = [0,1,1];
    if (n < 0) {
        console.log('please enter positve number');
        return null;
    }
    if (n === 0 ) return 0;
    else if (n <= 2) return 1;
    for (let i = 3; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    let swap;
    for (let i = 0; i < numArray.length; i++) {
        swap = false;
        for (let j = 0; j < numArray.length-1-i; j++) {
            let one = numArray[j];
            let two = numArray[j+1];
            if (one > two) {
                numArray[j] = two;
                numArray[j+1] = one;
                swap = true;
            }
        }
        if (!swap) return numArray;
    }
    return numArray;
}



// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    let reverse = '';
    for (let i = someStr.length-1; i >= 0; i--) {
        reverse += someStr[i];
    }
    return reverse;
}



// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum < 0) { 
        console.log('please enter a positive number');
        return null;
    }
    else if (someNum === 0) return 1;
    return someNum*factorial(someNum-1);
}



// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (length < 0 || offset < 0) {
        alert('length or offset is less than 0');
    }
    else if (length > someStr.length) {
        alert('length indicated is out of bounds');
    }
    else if (offset > someStr.length) {
        alert('offset is greater than length of string');
    } 
    else {
        return someStr.substring(offset,length);
    }
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    if (someNum & 1) return false;
    else return true; 
    //2s compliment numbers
    /*odd number bits end with 1
    even number bits end with 0*/
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    let palindrome = '';
    for (let i = someStr.length-1; i >= 0; i--) {
        palindrome += someStr[i];
    }
    if (someStr === palindrome) return true;
    else return false;
    //capital letters within word?
}


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character) {
    if (height <= 0) {
        console.log('shapes need to be at least height 2');
    }
    if (character.length > 1) {
        console.log('string must be one character to print shapes');
    }
    switch(shape) {
        case 'Square':
                let outputSquare = '';
                for (let i = 0; i < height; i++) { //rows
                    outputSquare += ' ';
                    for (let j = 0; j < height; j++) { //cols
                       outputSquare += character
                    }
                    outputSquare += '\n'; //next line
                }
                console.log(outputSquare);
            break;

        case 'Triangle':
                let outputTriangle = '';
                for (let i = 0; i < height; i++) { //rows
                    outputTriangle += ' ';
                    for (let j = 0; j <= i; j++) { //cols
                        outputTriangle += character;
                    }
                    outputTriangle += '\n'; //next line
                }
                console.log(outputTriangle);
            break;

        case 'Diamond':
                let outputDiamond = '';
                for (let i  = 0; i < height/2; i++) { //top half
                    for (let j = height-i; j > 1; j--) { //row
                        outputDiamond += ' ';
                    }
                    for (let k = 0; k <= i; k++) {
                    outputDiamond += character + character; //col
                    }
                    outputDiamond += '\n'; //next line
                }
                for (let i  = (height-1)/2; i > 0; i--) { //bottom half
                    for (let j = 0; j < height-i; j++) { //rows
                        outputDiamond += ' ';
                    }
                    for (let k = 0; k < i; k++) {
                        outputDiamond += character + character; //cols
                    }
                    outputDiamond += '\n'; //next line
                }

                console.log(outputDiamond);
            break;

        default:
            console.log('shape mentioned is not suppored by this function, please choose: triange, square or diamond');
        }

        //height /2 + .5

    // if (shape === 'square' | 'Square') {
    //     let output = '';
    //     for (let i = 0; i < height; i++) { //rows
    //         output += ' ';
    //         for (let j = 0; j < height; j++) { //columns
    //             output += character
    //         }
    //         output += '\n';
    //     }
    //     console.log(output);
    // }
    // else if (shape === 'triangle' | 'Triange') {
    //     let output = '';
    //     for (let i = 0; i < height; i++) { //rows
    //         output += ' ';
    //         for (let j = 0; j <= i; j++) { //cols
    //             output += character;
    //         }
    //         output+='\n';
    //     }
    //     console.log(output);
    // }
    // else if (shape === 'diamond' | 'Diamond') {
    //     let output = '';
    //     for (let i  = 0; i < height; i++) {
    //         for (let j = height-i; j > 1; j--) {
    //             output += ' ';
    //         }
    //         for (let k = 0; k <= i; k++) {
    //             output += character + ' ';
    //         }
    //         output+='\n';
    //       }
    //        for (let i  = height-1; i > 0; i--) {
    //          for (let j = 0; j < height-i; j++) {
    //              output += ' ';
    //          }
    //          for (let k = 0; k < i; k++) {
    //              output += character + ' ';
    //          }
    //          output+='\n';
    //        }

    //     console.log(output);
    // }
    // else {
    //     console.log('shape mentioned is not suppored by this function, please choose: triange, square or diamond');
    // }
}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
 function traverseObject(someObj) {
    // let keys = Object.keys(someObj);
    // console.log(keys);
    // let values = Object.values(someObj);
    // console.log(values);
    console.log(someObj);
 }


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson(name, age) {
    let person = {
        name: name,
        age: age
    };
    return person;
}

