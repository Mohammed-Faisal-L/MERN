  const myApi = async () => {
    await fetch("https://dummyjson.com/products")
      .then(async (resp) => {
        let response = await resp.json();
        let products = response.products;

        let [id, title, description] = Object.keys(products[0]);

        let table = document.getElementsByTagName("table");
        let tableRow = document.createElement("tr");

        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");

        let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

        th1.innerText = capitalize(id);
        th2.innerText = capitalize(title);
        th3.innerText = capitalize(description);

        tableRow.append(th1, th2, th3);

        table[0].appendChild(tableRow);

        products.map((ele) => {
          table = document.getElementsByTagName("table");
          tableRow = document.createElement("tr");

          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");

          td1.innerText = ele.id;
          td2.innerText = ele.title;
          td3.innerText = ele.description;

          tableRow.append(td1, td2, td3);

          table[0].appendChild(tableRow);
        });
      })
      .catch((msg) => {
        console.log(msg);
      });
  };
  myApi();
