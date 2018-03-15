// The second argument/parameter is expected to be a function
var indexFound = 0;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexFound = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him at index " + indexFound + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);