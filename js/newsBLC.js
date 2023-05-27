document.getElementById("text-color").style.color = "pink";

async function randomPersonsData() {
  let headersList = {
    Accept: "*/*",
  };

  let response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.text();
  loadDataintoPage(data);
}

function loadDataintoPage(personData) {
  console.log("personData::", JSON.parse(personData));

  JSON.parse(personData).map((person) => {
    let stringNode = `
          <div class="card">
              <img src=${person.avatar} alt="Avatar" style="width: 100%" />
              <div class="container">
                <h4><b>${person.first_name} ${person.last_name}</b></h4>
                <p>${person.employment.title}</p>
              </div>
            </div>
          `;

    var newTextNode = document.getElementById("cards");
    newTextNode && newTextNode.insertAdjacentHTML("beforeend", stringNode);
  });
}

randomPersonsData();
