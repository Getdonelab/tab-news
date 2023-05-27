document.getElementById("text-color").style.color = "pink";

async function getNewsFeed() {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch(
    "https://newsapi.org/v2/everything?q=SEO&page=1&language=en&apiKey=4d8d82ae26c944d09367b3f8190821b5",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.text();
  console.log(data);

  loadDataintoPage(data);
}

function loadDataintoPage(feedData) {
  console.log("feedData::", JSON.parse(feedData));
  //used slice() here to reduce number of cards temporarily
  JSON.parse(feedData)
    .articles.slice(0, 10)
    .map((news) => {
      let stringNode = `
          <div class="card">
              <img src=${
                news.urlToImage
                  ? news.urlToImage
                  : "https://searchengineland.com/wp-content/seloads/2014/08/seo-idea-lightbulbs-ss-1920-800x450.jpg"
              } alt="Avatar" style="width: 100%" />
              <div class="container">
                <h4><b> by ${news.author} </b></h4>
                <p>${news.description}</p>
              </div>
            </div>
          `;

      var newTextNode = document.getElementById("cards");
      newTextNode && newTextNode.insertAdjacentHTML("beforeend", stringNode);
    });
}

getNewsFeed();
