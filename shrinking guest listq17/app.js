var myFriends = ["ather", "moeed", "junaid", "azam", "tariq", "arsalan"];
console.log("Table is not available I can invite only 2 persons");
//remove all three last Element
var friend1 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend1, " you are not invited"));
var friend2 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend2, " you are not invited"));
var friend3 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend3, " you are not invited"));
var friend4 = myFriends.pop();
console.log("Sorry Mr. ".concat(friend4, " you are not invited"));
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends, " you are still invited"));
}
myFriends.pop();
myFriends.pop();
console.log(myFriends);
