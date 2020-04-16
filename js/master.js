const baseUrl =
  "http://flower-power.karstenbjelde.no/wp-json/wc/store/products";
const error = "error.html";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

fetch(baseUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    handleJson(json);
  });

const resultsContainer = document.querySelector(".content");

function handleJson(json) {
  let html = "";
  for (let index = 0; index < json.length; index++) {
    html += `<div class="container">
      <img
        class="pic"
        src="${json[index].images[0].src}"
        alt="blomster"
      /> 
      <div class="text">
      <p>${json[index].name}</p>
      
      <p>${json[index].prices.price_prefix} ${json[index].prices.price}</p>
      <a class="btn" href="index.html">View more</a>
      </div>
      </div>`;
  }
  resultsContainer.innerHTML = html;
}
