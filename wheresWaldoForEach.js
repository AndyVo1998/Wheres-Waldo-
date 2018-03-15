// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  arr.forEach(function(i){
    if (i === "Waldo") {
      indexFound = arr.indexOf(i)
      found(indexFound)
    }
  })
}

function actionWhenFound(indexFound) {
  console.log("Found him at index " + indexFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);