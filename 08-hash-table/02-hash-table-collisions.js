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
    //=> changed
    const index = this.hash(key);
    //this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      //bucket = [[key, value]];
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    //return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    //this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem, 1));
      }
    }
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
