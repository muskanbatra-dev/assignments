// Async allows your code to run in the background without blocking the execution of your code

// SetTimeout, setInterval,Fetch Api , Axios, Promises etc are examples of async code

// SetTimeout - It is a web API provided by the browser. it Schedules a task to be put on the /
// eventqueue after a given amount of time.

console.log("Before");

setTimeout(() => {
  console.log("Hello Timeout");
}, 2000);

console.log("After");
