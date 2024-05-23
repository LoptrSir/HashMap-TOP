//Hash Map TOP lesson

//Main Page

import {HashSet} from './hashSet.js';
import {HashMap} from './hashMap.js';

// function populateMap(data, map) {
//     for (const [key, value] of data) {
//         map.set(key, value);
//     }
// }

// let data = [
//     ["Fred", "Smith"],
//     ["Fred", "Jones"],
//     ["Albert", "Smith"],
//     ["Dingle", "Bawlz"],
//     ["Frez", "Smyth"],
//     ["Will", "Smith"],
//     ["Jimmy", "Bird"],
//     ["Freddie", "Bird"],
//     ["Evan", "Anderson"],
//     ["JC", "Anderson"],
//     ["Niki", "Neeshan"],
//     ["Jim", "Jones"],
//     ["Alicia", "Bitmore"]
// ];

let myHashMap = new HashMap();
//populateMap(data, myHashMap);
myHashMap.set("Fred", "Smith");
myHashMap.set("Fred", "Jones");
myHashMap.set("Albert", "Smith");
myHashMap.set("Dingle", "Bawlz");
myHashMap.set("Frez", "Smyth");
myHashMap.set("Will", "Smith");
myHashMap.set("Jimmy", "Bird");
// myHashMap.set("Fred", "Bird");
myHashMap.set("Freddie", "Bird");
myHashMap.set("Evan", "Anderson");
myHashMap.set("JC", "Anderson");
myHashMap.set("Niki", "Neeshan");
myHashMap.set("Jim", "Jones");
// console.log(myHashMap);
myHashMap.set("Alicia", "Bitmore");
console.log(myHashMap);
myHashMap.get("Niki");
myHashMap.get("SirNotAppearing");
myHashMap.has("Niki");
myHashMap.has("SirNotAppearing");
//myHashMap.remove("Niki");
myHashMap.remove("SirNotAppearing");
console.log(myHashMap);
myHashMap.length();
myHashMap.keys();
myHashMap.values();
myHashMap.entries();
// myHashMap.hashSet();
//myHashMap.clear(); 

let myHashSet = new HashSet();
myHashSet.set("Fred", "Smith");
myHashSet.set("Fred", "Jones");
myHashSet.set("Albert", "Smith");
myHashSet.set("Dingle", "Bawlz");
myHashSet.set("Frez", "Smyth");
myHashSet.set("Will", "Smith");
myHashSet.set("Jimmy", "Bird");
// myHashSet.set("Fred", "Bird");
myHashSet.set("Freddie", "Bird");
myHashSet.set("Evan", "Anderson");
myHashSet.set("JC", "Anderson");
myHashSet.set("Niki", "Neeshan");
myHashSet.set("Jim", "Jones");
// console.log(myHashSet);
myHashSet.set("Alicia", "Bitmore");
console.log(myHashSet);
