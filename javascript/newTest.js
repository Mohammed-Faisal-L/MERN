let table = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number}*${i}=${number * i}`);
  }
};
table(5);

function tab(a, b) {
  let flag = false;
  for (let i = 1; i <= 10; i++) {
    if (i * a == b) {
      flag = true;
      break;
    }
  }

  console.log(flag ? "present" : "not present");
}
tab(8, 88);

let div1 = document.getElementById("first");
div1.style.backgroundColor = "red";
div1.style.height = "200px";
div1.style.width = "200px";

div1.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Hello");
});

var div2 = document.createElement("div");
div2.innerText = "Hi";
div2.style.backgroundColor = "yellow";
div2.style.height = "100px";
div2.style.width = "100px";
div1.appendChild(div2);

div2.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("hi");
});
