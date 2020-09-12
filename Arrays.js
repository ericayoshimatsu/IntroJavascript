/*----------------------------------
ARRAYS
-----------------------------------
*/

var shoppingList = ["element:1", "butter", "milk", "eggs"];

// 0-based indexing
shoppingList[0] = "apples"

console.log(shoppingList);

// methods
shoppingList.push("last element");

console.log(shoppingList);

var lastElement = shoppingList.pop();

console.log(lastElement);

console.log(shoppingList.length);

// multidimensional array
var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4],
    [3.1, 3.2],
];

console.log(levels[0]);
console.log(levels[1][3]);

levels[1][3] = 5.5;
console.log(levels[1]);