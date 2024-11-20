const dragBox = document.getElementById("dragBox");
const dropArea = document.getElementById("dropArea");

dragBox.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id);

    // data transfer - an object use to hold any data transferred between context such as drag and drop operations
});

dropArea.addEventListener("dragover", function(event){
    event.preventDefault(); // This will allow you to drop
})

dropArea.addEventListener("drop", function(event){
    event.preventDefault(); // This will allow you to drop
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    dropArea.appendChild(draggedElement);
    dropArea.style.border = "2px solid green";
    dropArea.textContent = "dropped!";
})

//-----------------------------------------------------

// Check if the browser supports Web Workers
if(window.Worker) {
    const workerCode = `
    let count = 0;
    function countNumbers(){
        count++;
        postMessage(count); //to send count to the main thread
        setTimeout(countNumbers, 1000) // Repeat eveyone second
    }
        countNumbers();
    `;

    const workerBlob = new Blob([workerCode], {type: 'application/javascript'});
    const worker = new Worker(URL.createObjectURL (workerBlob));

    worker.onmessage = function(event){
        document.getElementById("counter").textContent = "Count: " + event.data;
    }
}

// API based URL (using JSON Placeholder for testing)
const apiBasedURL = "https://jsonplaceholder.typicode.com";

// Function to handle GET request
async function handleGetRequest() {
    try {
        const response = await fetch (`${apiBasedURL}/posts/1`)
        // example of GET request to fetch a post
        const data = await response.json();
        displayResult(data);
    }    catch (error) {
        displayResult({error: error.message})
    }
}

// Function to handle POST request
async function handlePostRequest (){
    try {
        const response = await fetch (`${apiBasedURL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title:"foo",
                body: "bar",
                userId: 1
            }), //Example payload
        });
        const data = await response.json();
        displayResult(data);
    }   catch(error){
        displayResult({error: error.message});
    }
}

//Function to display results in the response section
function displayResult(data) {
    const responseDataElement = document.getElementById("responseData");
    responseDataElement.textContent = JSON.stringify(data, null, 2);
}

// Attach event listeners to buttons
document.getElementById("getButton").addEventListener("click", handleGetRequest);
document.getElementById("postButton").addEventListener("click", handlePostRequest);