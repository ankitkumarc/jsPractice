// Write a function to remove nested arrays and flatten the Array

// input: [1, 2, [3, 4, [5, 6], 7], 8]
// output: [1, 2, 3, 4, 5, 6, 7, 8]

//Code

// function flatten(arr) {
//     if (!Array.isArray(arr)) return arr;
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output = output.concat(flatten(arr[i]));
//     }
//     return output;
// }

// console.log(flatten([1, 2, [3, 4, [5, 6], 7], 8, [[[NaN]], undefined]]));

////////////////////////////////////

// write a function to deeep clone an object
// input: { a: 1, b: { c: 2, d: 3 } }
// output: { a: 1, b: { c: 2, d: 3 } } where assertion input === output false

//Code
//1
// output = { ...input }
// output===input //false

//2

const input = { a: 1, b: { c: 2, d: 3 } };

function deepClone(input) {
    let output = Array.isArray(input) ? [] : {};

    if (typeof input !== 'object') return input;

    for (let key in input) {
        output[key] = deepClone(input[key]);
    }

    return output;
}

const output = deepClone(input);

console.log(output);
