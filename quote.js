const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    // Add more quotes as needed
  ];

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/random-quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  