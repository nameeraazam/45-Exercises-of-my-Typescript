var myPizza = ["cheese pizza", "pepperoni pizza", "vegetarain pizza"];
//print the names of the pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
// priniting name and sentence/message
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
console.log("I really like to eat pizza.pizza comes in a variety of flavours and toopings, allowing individual to customizeit their liking\n");
