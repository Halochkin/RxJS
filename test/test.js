let value = 0;

const test = from([1, 2, 3, 4, 4, 3, 12, 9, 13])

test.pipe(
  map(x => value = x), // Assign the current variable to value
  map(x => x % 2 === 0),  // check condition returns true or false
  filter(x => x == true),  // we filter data which allows the data further only if true
  map(x => value) // Output the value stored in value
)
  .subscribe(val => console.log(val));