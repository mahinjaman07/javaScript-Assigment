// Problem Practice Task 1

// function gemsToDiamond(friend1, friend2, friend3) {
//     let myRemainingDiamond = 0;

//     let firstFriendGems = 21;
//     let secondFriendGems = 32;
//     let thirdFriendGems = 43;

//     let firstFriendTotalGems = friend1 * firstFriendGems;
//     let secondFriendTotalGems = friend2 * secondFriendGems;
//     let thirdFriendTotalGems = friend3 * thirdFriendGems;

//     let threeFriendsTotalGems = firstFriendTotalGems + secondFriendTotalGems + thirdFriendTotalGems;

//     if (threeFriendsTotalGems > 1000*2) {
//         let remainingDiamonds = threeFriendsTotalGems - 2000;
//         myRemainingDiamond = remainingDiamonds;
//         return myRemainingDiamond;
//     }
//     else{
//         return threeFriendsTotalGems;
//     }


// }

// let firstFriend = 20;
// let secondFriend = 200;
// let thirdFriend = 50;

// let getGems = gemsToDiamond(firstFriend, secondFriend,thirdFriend);
// console.log(getGems);

// Problem Practice Task 2

// function gemsToDiamond(friend1, friend2, friend3) {
//     let myRemainingDiamond = 0;

//     let firstFriendGems = 21;
//     let secondFriendGems = 32;
//     let thirdFriendGems = 43;

//     let firstFriendTotalGems = friend1 * firstFriendGems;
//     let secondFriendTotalGems = friend2 * secondFriendGems;
//     let thirdFriendTotalGems = friend3 * thirdFriendGems;

//     let threeFriendsTotalGems = firstFriendTotalGems + secondFriendTotalGems + thirdFriendTotalGems;

//     if (threeFriendsTotalGems > 1000*2) {
//         let remainingDiamonds = threeFriendsTotalGems - 2000;
//         myRemainingDiamond = remainingDiamonds;
//         return myRemainingDiamond;
//     }
//     else{
//         return threeFriendsTotalGems;
//     }


// }

// let firstFriend = 20;
// let secondFriend = 200;
// let thirdFriend = 50;

// let getGems = gemsToDiamond(firstFriend, secondFriend,thirdFriend);
// console.log(getGems);



// Problem Practice Task 3

function gemsToDiamond(friend1, friend2, friend3) {
    let myRemainingDiamond = 0;

    let firstFriendGems = 21;
    let secondFriendGems = 32;
    let thirdFriendGems = 43;

    let firstFriendTotalGems = friend1 * firstFriendGems;
    let secondFriendTotalGems = friend2 * secondFriendGems;
    let thirdFriendTotalGems = friend3 * thirdFriendGems;

    let threeFriendsTotalGems = firstFriendTotalGems + secondFriendTotalGems + thirdFriendTotalGems;

    if (threeFriendsTotalGems > 1000*2) {
        let remainingDiamonds = threeFriendsTotalGems - 2000;
        myRemainingDiamond = remainingDiamonds;
        return myRemainingDiamond;
    }
    else{
        return threeFriendsTotalGems;
    }


}

let firstFriend = 100;
let secondFriend = 5;
let thirdFriend = 1;

let getGems = gemsToDiamond(firstFriend, secondFriend,thirdFriend);
console.log(getGems);