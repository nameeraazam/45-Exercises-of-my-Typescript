var myPizza = ["cheese Pizza", "pepperoni pizza", "vegetarian Pizza"];
//print only the name of pizza
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
//printing names and sentence/message
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like to eat ".concat(myPizza[i]));
}
console.log("I really like to eat pizzas.pizza come in a variety of flavors and toopings,allowing individual to customize it to their liking\n");
