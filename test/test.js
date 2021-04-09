const myArray = new Array();
// Enabling the counter labeled Initialize myArray.
console.time("Initialize myArray");
myArray[0] = myArray[1] = 1;
for (i = 2; i < 10; i++) {
  myArray[i] = myArray[i - 1] + myArray[i - 2];
}
// Switching off the counter labeled Initialize myArray.
console.timeEnd("Initialize myArray");