// A Promise represents a value that may not be available yet but will be at some point in the future. A Promise can be in one of three states:

// Pending: The operation is still ongoing.
// Fulfilled: The operation was successful, and the promise resolves with a value.
// Rejected: The operation failed, and the promise is rejected with an error.

// Promises allow handling asynchronous operations in a cleaner way by chaining .then() for success and .catch() for errors.


console.log("starts.");

function fetchData() {
    return new Promise((resolve, reject) => {           //A Promise is created using the new Promise() constructor. 
                                                        //  The callback function inside the Promise runs automatically when it is created.
        console.log("Fetching data...");

        setTimeout(() => {
        
            const is_successful = Math.random() > 0.5;  // Simulate random success or failure
            if (is_successful) {

                resolve({ id: 1, name: "Imrul" });      // Resolve with data if successful
            
            }

            else {
                reject("Failed to fetch data 😞");     // Reject with an error if failed
            }
            
    
        }, 2000);
    })
        
}


// Resolving or Rejecting the Promise:

// If the operation is successful, resolve() is called.
// If the operation fails, reject() is called.


fetchData().then((data) => {
    console.log("Data fetched:", data);                // Success: log the data
})
    .catch((error) => {
        console.log("Error:", error);                   // Failure: log the error
    
    })

// Using .then() and .catch():
// .then(): Used to handle the result when the promise is fulfilled.
// .catch(): Used to handle errors when the promise is rejected.

console.log("ends.");    
