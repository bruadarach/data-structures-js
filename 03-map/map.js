/* built-in data structure `Map` */
// "a", "b" => keys
// 1, 2 => values
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

// iterate with for
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
// a : 1
// b : 2

// add a new value : map.set(key, value)
map.set("c", 3);
console.log(map); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// check key existence : map.has(key)
console.log(map.has("c")); // true
console.log(map.has("d")); // false

// delete : map.delete(key)
console.log(map.delete("c"));
console.log(map); // Map(2) { 'a' => 1, 'b' => 2 }

// number of key-value pairs : map.size()
console.log(map.size); // 2

// delete all key-value pairs : map.clear()
map.clear();
console.log(map); // Map(0) {}
