// A callback function is a function that is passed as an argument to another function and is executed after the completion of the
// other function. Callbacks are widely used in JavaScript, especially for asynchronous operations such as API calls, file reading,
// or event handling.

// What is Happening in a Callback?

// A callback function is passed as an argument to another function.
// The other function (like processUserInput, fetchData, or map) invokes the callback at a specific point in time.

// When to Use Callbacks?

// When a function depends on the result of another function (e.g., fetching data before displaying it).
// When you need asynchronous behavior (e.g., waiting for a delay or API response).

// Why Use Arrow Functions in Callbacks?

// They provide a shorter syntax and avoid binding their own this.


// Example 1: Synchronous Callback


function synchronousCallback(callback) {           // Main function that takes a callback
    const name = "Imrul";                          // Create a name
    callback(name);                                // Call the callback function and pass the name
}

function greetUser(name) {                         // Callback function
    console.log(`hello ${name} `);
}

synchronousCallback(greetUser);                    // Use the main function and pass the callback


// Example 2: Asynchronous Callback (Using setTimeout) 

console.log("Asynchronous callback starts...");      //Step 1: Logs the start of callback

function fetchData(callback) {
    console.log("Fetching data..."); // Step 2: Logs the start of fetching
    setTimeout(()=>
    {
        const data = { id: 1, name: "Imrul" };   // Simulate fetched data
        callback(data);                         // Step 3: Call the callback with the fetched data
    }, 2000);                                   // Simulate a 2-second delay
}

function displayData(data) {
    console.log("Data fetched:", data);        // Step 5: Logs the fetched data
}

fetchData(displayData);

console.log("Asynchronous callback ends...");  // Step 4: Logs the end of callback


// Example 4: Multiple Callbacks (Success and Error)


function multipleCallbacks(successCallback,errorCallback) {
    const is_successful = Math.random() > 0.5;   // Random success/failure
    

    if (is_successful) {
        successCallback("Successfully done 🎉");
    }
    else {
        errorCallback("Failed 😞");
    }
}

function successMessage(message) {
    console.log(message);
}

function errorMessage(error) {
    console.log(error);
}

multipleCallbacks(successMessage, errorMessage);