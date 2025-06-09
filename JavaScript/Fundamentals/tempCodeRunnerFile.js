// array 
const Colors= ["red", "blue", "green"];
Colors[0] ="Pink";  // replacing in the place of red. 
Colors.push("Yellow"); // we CAN do this but can't directly reassign
// Colors.pop(); // removes last element, so we can also remove 
console.log(Colors);

// Attempting to reassign the constant array
Colors = [1,2,3];  // This will result in an runtime error
console.log(Colors); 
