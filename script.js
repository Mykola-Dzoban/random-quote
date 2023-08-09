const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("new-quote");

const API_KEY = "HglsMEXb/A/PvyywG7yMfg==8c2qAtI3d1dOTIZB";

const URL = "https://api.api-ninjas.com/v1/quotes";

const randomColor = () => {
  const colors = [
    "#F7F6CF",
    "#5784BA",
    "#CCD4BF",
    "#E7CBA9",
    "#BEB4C5",
    "#218B82",
    "#C47482",
    "#7B92AA",
    "#A15D98",
    "#8C7386",
    "#9C9359",
    "#8FA2A6",
    "#C3B8AA",
    "#AE8A8C",
    "#874741",
    "#40393E",
    "#897C87",
  ];
  const randomColorIndex = Math.floor(Math.random() * colors.length + 1);

  return colors[randomColorIndex];
};

const getData = (url) => {
  return fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": API_KEY },
    contentType: "application/json",
  });
};

const generateQuote = (url) => {
  getData(url)
    .then((resp) => resp.json())
    .then((data) => {
      let randomColorStyle = randomColor();
      document.body.style.background = randomColorStyle;
      document.body.style.color = randomColorStyle;
      quoteText.innerText = `❝ ${data[0].quote} ❞`;
      quoteAuthor.innerText = data[0].author;
    });
};

document.addEventListener("DOMContentLoaded", () => {
  
  generateQuote(URL);
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  generateQuote(URL);
});