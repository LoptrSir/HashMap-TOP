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
    this.arrayLength = 8;
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
        console.log("Resize TemBuckets:", tempBuckets);
      }
    }
    this.buckets = tempBuckets;
    console.log("Set new array length:", this.buckets.length);
  }

  set(key, value) {
    //creates a node
    let sizeFactor = 0.75;
    const hashCode = this.hash(key);
    const newNode = new Node(key, value);

    if (this.size / this.buckets.length >= sizeFactor) {
      console.log("Set: Array Length Resize Triggered");
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
    console.log('Get: hashCode', hashCode, key);
  // Get the node at the computed hash code index
  let currentNode = this.buckets[hashCode];

  // Traverse the linked list in the bucket
  while (currentNode != null) {
    if (currentNode.key === key) {
      console.log("Get: Key found.", key);
      return currentNode.value; // Return the value associated with the key
    }
    currentNode = currentNode.next;
  }
  console.log('Get: Key not found', key);
  return null; // Return null if the key is not found
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
myHashMap.set("Fred", "Smith");
myHashMap.set("Fred", "Jones");
myHashMap.set("Albert", "Smith");
myHashMap.set("Dingle", "Bawlz");
myHashMap.set("Frez", "Smyth");
myHashMap.set("Will", "Smith");
myHashMap.set("Jimmy", "Bird");
// myHashMap.set("fred", "bird");
myHashMap.set("Freddie", "Bird");
myHashMap.set("Evan", "Anderson");
myHashMap.set("JC", "Anderson");
myHashMap.set("Niki", "Neeshan");
myHashMap.set("Jim", "Jones");
// console.log(myHashMap);
myHashMap.set("Alicia", "Bitmore");
console.log(myHashMap);
myHashMap.get("Niki");
