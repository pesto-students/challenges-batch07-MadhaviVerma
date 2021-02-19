

function chunkArrayInGroups(arr, size) {
  var results = [];
  while(arr.length){
    results.push(arr.splice(0,size));
  }
  return results;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));




