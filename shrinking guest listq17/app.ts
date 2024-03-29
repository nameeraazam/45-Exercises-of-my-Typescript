const myFriends: string [] = ["ather","moeed","junaid","azam","tariq","arsalan"];

console.log(`Table is not available I can invite only 2 persons`);

//remove all three last Element

let friend1 = myFriends.pop();
console.log(`Sorry Mr. ${friend1} you are not invited`);

let friend2 = myFriends.pop();
console.log(`Sorry Mr. ${friend2} you are not invited`);

let friend3 = myFriends.pop();
console.log(`Sorry Mr. ${friend3} you are not invited`);

let friend4 = myFriends.pop();
console.log(`Sorry Mr. ${friend4} you are not invited`);

for(let i = 0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends} you are still invited`)
}


myFriends.pop();
myFriends.pop();

console.log(myFriends);
