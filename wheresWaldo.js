// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var indexFound = i;
      found(indexFound);   // execute callback
    }
  }
}

function actionWhenFound(indexFound) {
  console.log("Found him at index " + indexFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);