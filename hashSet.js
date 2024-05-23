// TOP HashMap lesson

//HashSet

import { Node, HashMap } from "./hashMap.js";

export class HashSet {
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

    return hashCode % this.arrayLength;
  }

  resize() {
    //resize when existing array becomes too small.
    this.arrayLength *= 2;
    let tempBuckets = new Array(this.arrayLength);

    for (let i = 0; i < this.buckets.length; i++) {
      let currentNode = this.buckets[i];
      let previousNode = null;

      while (currentNode) {
        if (previousNode) {
          previousNode.next = null; //detach previous node from current node
        }
        console.log("Resize CurrentNode:", currentNode);

        //rehash key and create newNode in larger array
        let newHashCode = this.hash(currentNode.key);
        let newNode = new Node(currentNode.key);
        this.size--;

        if (!tempBuckets[newHashCode]) {
          tempBuckets[newHashCode] = newNode;
          this.size++;
        } else {
          let currentTempNode = tempBuckets[newHashCode];
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
      console.log("Resize TempBuckets:", tempBuckets);
    }
    this.buckets = tempBuckets;
    console.log("Set new array length:", this.buckets.length);
  }

  set(key) {
    //creates a node
    let sizeFactor = 0.75;
    const hashCode = this.hash(key);
    const newNode = new Node(key);

    if (this.size / this.buckets.length >= sizeFactor) {
      console.log("Set: Array Length Resize Triggered");
      this.resize();
    }
    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = newNode;
      this.size++;
      console.log("set: NewNode Added-", hashCode, "size:", this.size);
      console.log("Set: Buckets-", this.buckets);
    } else {
      let currentNode = this.buckets[hashCode];

      while (currentNode.next) {
        currentNode = currentNode.next;
        console.log("Buckets:", this.buckets);
      }
      currentNode.next = newNode;
      this.size++;
      console.log(
        "Set: hashCode collision resolved",
        hashCode,
        key,
        "size:",
        this.size
      );
    }
  }
}
