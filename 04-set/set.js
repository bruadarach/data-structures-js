/* built-in data structure `Set` */

const set = new Set([1, 2, 3]);
console.log(set); // set(3) {1,2,3}

const dup = new Set([1, 2, 3, 3, 3]);
console.log(dup); // // set(3) {1,2,3}

set.add(4);
console.log(set.has(4)); // true

set.delete(3);
console.log(set.size); // 3
set.clear();
console.log(set); // Set(0) {}

const setNum = new Set([1, 2, 3, 4, 5]);
for (const item of setNum) {
  console.log(item);
}
// 1
// 2
// 3
// 4
// 5

/* set.entries()
    : The entries() method returns a new Iterator object 
      that contains an array of [value, value] for each element 
      in the Set object, in insertion order.
*/
const set1 = new Set();
set1.add(1);
set1.add(2);

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // expected output: [1,1]
  // expected output: [2,2]
}

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);

const setIter = set2.entries();

console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // [2, 2]
console.log(setIter.next().value); // [3, 3]

/* Set.forEach() 
    : The forEach() method executes a provided function once 
      for each value in the Set object, 
      in insertion order.
*/
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"

/* Set.values() === Set.keys() */
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const mySetIter = mySet.values();

console.log(mySetIter.next().value); // "foo"
console.log(mySetIter.next().value); // "bar"
console.log(mySetIter.next().value); // "baz"

/* Set.values() === Set.keys() */
const myKeys = new Set();
myKeys.add("foo");
myKeys.add("bar");
myKeys.add("baz");

const myKeysIter = myKeys.values();

console.log(myKeysIter.next().value); // "foo"
console.log(myKeysIter.next().value); // "bar"
console.log(myKeysIter.next().value); // "baz"
