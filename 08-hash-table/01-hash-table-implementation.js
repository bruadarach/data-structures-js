class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.display();

table.set("name", "Sujeong Ji");
table.set("pet", "Lucky");
table.display();
// 17 Sujeong Ji
// 29 Lucky

console.log(table.get("name")); // Sujeong Ji

table.remove("name");
table.display();
// 29 Lucky

table.set("pet", "Deoqua");
table.display();
// 29 Deoqua

table.set("tep", "collision happened because of charCodeAt!");
table.display();
// 29 collision happened because of charCodeAt!
