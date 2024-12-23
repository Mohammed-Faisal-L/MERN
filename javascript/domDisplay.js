const myApi = async () => {
  await fetch("https://dummyjson.com/products")
    .then(async (resp) => {
      let response = await resp.json();
      let products = response.products;
      products.map((ele) => {
        let table = document.getElementsByTagName("table");
        let tableRow = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerText = ele.id;
        td2.innerText = ele.title;
        td3.innerText = ele.description;

        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);

        table[0].appendChild(tableRow);
      });
    })
    .catch((msg) => {
      console.log(msg);
    });
};
myApi();
