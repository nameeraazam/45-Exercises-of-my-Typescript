const myFriends: string [] = ["ather","moeed","junaid","azam","tariq"];
console.log(myFriends);

console.log(`we have 3 more friends to invite on dinner\n`)

// adding three more friends
// add at begining
myFriends.unshift("amir");
// ["ather","moeed","junaid","azam","tariq"]
console.log(myFriends);

// add at middle
myFriends.splice(2, 0, "Nasir ali");
console.log(myFriends);

//add at last 
myFriends.push("Hammad");
console.log(myFriends);

//print all friends along with message

for(let i =0; i < myFriends.length; i++){
    console.log(`Mr. ${myFriends[i]} you are invited to my dinner`);
}