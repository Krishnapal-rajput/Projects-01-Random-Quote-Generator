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

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Check the data structure here
      const quote = document.querySelector(".quote");
      const author = document.querySelector(".author");
      author.innerHTML = `-<em>${data.author}</em>`;
      quote.innerHTML = `<q>${data.content}</q>`;
    })
    .catch((error) => console.error("Error:", error));
});
