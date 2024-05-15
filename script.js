//Hash Map TOP lesson

//Error if index greater than assigned array size  //Use this when accessing a bucket through an index
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // It seems head will be generated automatically if needed. verify this.
  }
}

class HashMap {
  constructor() {
    this.arrayLength = 16;
    this.buckets = new Array(this.arrayLength);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    console.log("hash:", hashCode % this.arrayLength);
    return hashCode % this.arrayLength;
  }

  resize() {
    //resize when existing array becomes too small.
    this.arrayLength = this.arrayLength * 2;
    let tempBuckets = new Array(this.arrayLength);

    for (let i = 0; i < this.buckets.length; i++) {
      let currentNode = this.buckets[i];
      let previousNode = null;

      while (currentNode !== null && currentNode !== undefined) {
        while (currentNode !== null) {
          if (previousNode !== null) {
            previousNode.next = null; //detach previous node from current node
          }
          console.log(
            "Resize: Temp",
            tempBuckets,
            "Current:",
            myHashMap,
            "size:",
            this.size
          );
          console.log("Resize CurrentNode:", currentNode);

          //rehash key and create newNode in larger array
          let newHashCode = this.hash(currentNode.key);
          let newNode = new Node(currentNode.key, currentNode.value);
          this.size--;

          // if (tempBuckets[newHashCode] === undefined) {
          if (!tempBuckets[newHashCode]) {
            tempBuckets[newHashCode] = newNode;
            this.size++;
          } else {
            let currentTempNode = tempBuckets[newHashCode];
            // while (currentNode.next !== null) {
            while (currentNode.next) {
              currentTempNode = currentTempNode.next; //code breaks here if linkedList is greater than 1.
            }
            currentTempNode.next = newNode;
            this.size++;
          }
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        this.buckets[i] = null;
      }
      this.buckets = tempBuckets;
      console.log("Set new array length:", this.buckets.length);
    }
  }

  set(key, value) {
    //creates a node
    let sizeFactor = 0.75;
    const hashCode = this.hash(key);
    const newNode = new Node(key, value);

    if (this.size / this.buckets.length >= sizeFactor) {
      console.log("Set: Array Length triggered");
      this.resize();
    }

    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = newNode;
      this.size++;
      console.log("set:", hashCode, key, value, "size:", this.size);
      console.log("Buckets:", this.buckets);
    } else {
      let currentNode = this.buckets[hashCode];
      while (currentNode.next) {
        currentNode = currentNode.next;
        console.log("myHashMap:", myHashMap);
        console.log("Buckets:", this.buckets);
      }
      currentNode.next = newNode;
      this.size++;
      console.log(
        "Set: hashCode collision resolved",
        hashCode,
        key,
        value,
        "size:",
        this.size
      );
    }
  }

  get(key) {
    //return value or null
    const hashCode = this.hash(key);
    if (this.buckets[hashCode] === hashCode) {
      return this.buckets[hashCode];
    } else {
      return null;
    }
  }
  has(key) {} //return true/false if key is present
  remove(key) {} //remove key return true, if not present return false
  length() {} //return number of stored keys
  clear() {} //clear all entries in hashmap
  keys() {} //return array w/ all keys
  values() {} //return array w/ all values
  entries() {} //return array with all key, value pairs
  //Extra Credit
  hashSet() {} //FACTORY similar toe HashMap but contains only keys
}

let myHashMap = new HashMap();
myHashMap.set("fred", "smith");
myHashMap.set("fred", "jones");
myHashMap.set("albert", "smith");
myHashMap.set("dingle", "bawlz");
myHashMap.set("frez", "smyth");
myHashMap.set("will", "smith");
myHashMap.set("jimmy", "bird");
// myHashMap.set("fred", "bird");
myHashMap.set("freddie", "bird");
myHashMap.set("Evan", "Anderson");
myHashMap.set("JC", "Anderson");
myHashMap.set("niki", "Neeshan");
myHashMap.set("Jim", "Jones");
console.log(myHashMap);
myHashMap.set("Alicia", "Bitmore");
console.log(myHashMap);
