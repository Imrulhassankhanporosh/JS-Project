// async makes asynchronous programming easier to write, manage, and debug.
// It improves readability, especially when compared to using Promises directly with .then() and .catch().
// With async/await, you can handle complex asynchronous logic without chaining numerous callbacks or Promise methods.


// Function that fetches data and returns a Promise

function fetchData() {
    return new Promise((resolve, reject) => {                // A Promise is created

        console.log("Fetching data...");

        setTimeout(() => {

            const is_successful = Math.random() > 0.5;        // Simulate random success or failure
            if (is_successful) {
                resolve({ id: 1, name: "Imrul" });            // Resolve with data if successful
            }
            else {
                reject("Failed to fetch data 😞")            // Reject with an error if failed
            }

        }), 2000;
    });
    
}

// Function to fetch data using async/await

async function handleData() {

    try {
        console.log("Start fetching...");
        const data = await fetchData();                // Await pauses the execution until Promise resolves
        console.log("Data fetched:", data);            // Success: log the data

    }
    catch (error) {
        console.log("Error:", error);                  // Failure: log the error
    }
    console.log("Ends.");
    
}


// Call the async function
handleData();