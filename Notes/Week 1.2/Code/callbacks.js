// Callback is a function that is passed as an argument to another function and is executed
// after its parent function is completed.

// Callbacks are used to make sure that as function is not going before a task is completed
// but will run right after the task has completed.

// It helps us to develop asynchronous Javascript code nad keep us safe from problems and error

// Example 1: Simple callback example
function hello(a, b) {
  b();
  //b is a callback function
}

hello(1, function () {
  console.log("callback chala");
});

// Example 2: Simulating async operation using setTimeout
function doSomeAsyncWork(x, y, callback) {
  setTimeout(function () {
    callback(x, y);
  }, 1000);
}

doSomeAsyncWork(1, 2, function (x, y) {
  console.log(x + y);
});
