const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i=0;
console.log("The ingredients of banana bread displayed using while-loop are: "); 

while(i<ingredients.length){
  console.log(ingredients[i]);
  i++;
}


// Write a for loop that prints out the contents of ingredients:
console.log("The ingredients of banana bread displayed using for-loop are: "); 

for(let i=0;i<ingredients.length;i++){
  console.log(ingredients[i]);
  }
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("The ingredients displayed backward are: "); 

for(i=ingredients.length-1;i>=0;i--){
  console.log(ingredients[i]);
}