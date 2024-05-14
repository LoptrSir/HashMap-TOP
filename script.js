//Hash Map TOP lesson

//Error if index greater than assigned array size  //Use this when accessing a bucket through an index
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null; // If there is a nextNode then I need a head generated
    // this.nextNode = nextNode;  //Not appropriate for this circumstance.
  }
}

class HashMap {
  constructor(key, value) {
    this.buckets = new Array(16);
    this.size = 0;
    // this.head = null;  //preemptive placement is not best practices, rather address is in set() if/when it occurs.
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      console.log("hash:", hashCode);
    }
    return hashCode % this.buckets.length;
  }

  set(key, value) {
    //creates a node
    let sizeFactor = 0.75;

    if (this.size / this.buckets.length >= sizeFactor) {
      console.log("Set: Array Length triggered");
      let tempBuckets = new Array(this.buckets.length * 2);

      for (let i = 0; i < this.buckets.length; i++) {
        let currentNode = this.buckets[i];
        let previousNode = null;

        while (currentNode !== null) {
          //detach current node from linked list
          if (previousNode !== null) {
            previousNode.next = null; //detach previous node from current node
          }
          console.log('MyHashMap', myHashMap)
          console.log('Resize CurrentNode:', currentNode);
          // create new hash, new Node and assign to new array
          let newHashCode = this.hash(currentNode.key); //rehash key
          let newNode = new Node(currentNode.key, currentNode.value);

          if ((tempBuckets[newHashCode] === undefined)) {
            tempBuckets[newHashCode] = newNode;
          } else {
            let currentTempNode = tempBuckets[newHashCode];
            while (currentNode.next !== null) {
              currentTempNode = currentTempNode.next;
            }
            currentTempNode.next = newNode;
          }
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        this.buckets[i] = null; //all nodes reassigned, set bucket to empty.
      }
      this.buckets = tempBuckets;
      console.log("Set new array length:", this.buckets.length);
    }

    const hashCode = this.hash(key);
    const newNode = new Node(key, value);

    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = newNode;
      this.size++;
      console.log("set:", hashCode, key, value, "size:", this.size);
    } else {
      let currentNode = this.buckets[hashCode];
      while (currentNode.next) {
        currentNode = currentNode.next;
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

  // this.buckets = new Node(key, value);
  //assign hashCode to new Node(key, value) that gets assigned to a bucket.
  //}

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
myHashMap.set("fred", "bird");
myHashMap.set("Evan", "Anderson");
myHashMap.set("JC", "Anderson");
myHashMap.set("niki", "Neeshan");
myHashMap.set("Jim", "Jones");
console.log(myHashMap);
myHashMap.set("Alicia", "Bitmore");
console.log(myHashMap);

//    //Collision management
// class Node {
//   constructor(value, nextNode) {
//     this.value = value;
//     this.nextNode = nextNode;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
// }
