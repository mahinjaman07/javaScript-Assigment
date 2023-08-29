// Practice Problem Task 1

// function findingBadData(arr) {
//     let badData = [];
//     let goodData = [];
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (element < 0) {
//             badData.push(element);
//         }
//         else if (element >= 0) {
//             goodData.push(element);
//         }
        
//     }
//     return badData.length;

// }

// let input = [1,2,5 ];
// let badData = findingBadData(input);
// console.log(badData);


// Practice Problem Task 2


// function findingBadData(arr) {
//     let badData = [];
//     let goodData = [];
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (element < 0) {
//             badData.push(element);
//         }
//         else if (element >= 0) {
//             goodData.push(element);
//         }
        
//     }
//     return badData.length;

// }

// let input = [2, -5, -7, -13];
// let badData = findingBadData(input);
// console.log(badData);

// Practice Problem Task 2

function findingBadData(arr) {
    let badData = [];
    let goodData = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element < 0) {
            badData.push(element);
        }
        else if (element >= 0) {
            goodData.push(element);
        }
        
    }
    return badData.length;

}

let input = [-4, -9, -5, -33, -55 ];
let badData = findingBadData(input);
console.log(badData);