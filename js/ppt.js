// Promises
const promise = new Promise((resolve, reject) => {
  const sum = 6 + 7; // sum is 13
  if (sum % 2 === 0) {
    resolve("promise success");
  } else {
    reject("promise rejected");
  }
});

// Handling the promise resolution and rejection
promise
  .then((message) => {
    console.log("This is resolved:", message);
  })
  .catch((message) => {
    console.log("This is rejected:", message);
  })
  .finally(() => {
    console.log("This runs regardless of success or failure");
  });

// Example using Promise.all
const promise1 = Promise.resolve("Task 1 success");
const promise2 = Promise.resolve("Task 2 success");
const promise3 = Promise.reject("Task 3 failed");

Promise.all([promise1, promise2, promise3])
  .then((messages) => {
    console.log("All promises resolved:", messages);
  })
  .catch((error) => {
    console.log("One or more promises failed:", error); // Output will be "Task 3 failed" since one promise rejected
  });

// Example using Promise.any
Promise.any([promise1, promise2, promise3])
  .then((firstSuccess) => {
    console.log("First successful promise:", firstSuccess); // Output will be "Task 1 success" or "Task 2 success"
  })
  .catch((error) => {
    console.log("All promises failed:", error);
  });

// callback hell
task1((result1) => {
  task2((result2) => {
    // somecode here
  });
});

// callback hell resolved using promise
task1()
  .then((result1) => task2())
  .then((result2) => {
    // Do something with result2
    // Stopping here, not calling task3
  })
  .catch((err) => {
    // Handle any error from task1 or task2
  });

// nested promise resolved using async and await
async function runTasks() {
  try {
    const result1 = await task1();
    const result2 = await task2();
    // Do something with result2
    // Stopping here, not calling task3
  } catch (err) {
    // Handle any error from task1 or task2
  }
}
runTasks();

// fetch an api
const myApi = async () => {
  let url = await fetch("https://dummyjson.com/products")
    .then(async (resp) => {
      let response = await resp.json();
      console.log(response);
    })
    .catch((msg) => {
      console.log(msg);
    });
};
myApi();

// Event Handling
function clickme() {
  alert("onclick event handled !!");
}

function dataSubmitted(event) {
  event.preventDefault(); // Prevents form submission
  console.log("Button clicked, form submission prevented!");
}
