const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
/* Using for loop too display elements.
for (let i = 0; i < packingList.length; i++) {
 // console.log(packingList[i]);
}
console.log(packingList[3]);
*/
//Using do while loop

let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}