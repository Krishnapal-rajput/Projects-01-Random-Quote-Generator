// fetch("https://api.quotable.io/random")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Use data.content and data.author
//   })
//   .catch((error) => console.error("Error:", error));

// Other APIs
// 1. https://api.forismatic.com/api/1.0/
// 2. https://quotes.rest/qod

// Select the button element from the DOM
const btn = document.querySelector(".btn");

// Add an event listener to the button for click events
btn.addEventListener("click", () => {
    // Fetch a random quote from the Quotable API
    fetch("https://api.quotable.io/random")
        .then((response) => {
            // Check if the response is okay (status code in the range 200-299)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON from the response
        })
        .then((data) => {
            // Log the fetched data for debugging
            console.log(data);
            // Select the quote and author elements from the DOM
            const quote = document.querySelector(".quote");
            const author = document.querySelector(".author");
            // Update the author and quote with the fetched data
            author.innerHTML = `-<em>${data.author}</em>`; // Update author
            quote.innerHTML = `<q>${data.content}</q>`; // Update quote with <q> tag
        })
        .catch((error) => console.error("Error:", error)); // Log any errors
});
