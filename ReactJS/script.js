// this is from pure js
let h1 = document.createElement("h1");
h1.innerText = "innerText";
h1.style.textAlign = "center";
let body = document.getElementsByTagName("body");
console.log(body);
body[0].appendChild(h1);

// this is from react js
const myReactHeader = React.createElement(
  "h1",
  { id: "reactHead" },
  "hello from reactjs"
);

// creating the child and parent elements in React
const div = React.createElement("div", {}, [
  React.createElement("h1", {}, "i am a child of div"),
  React.createElement("h2", {}, "i am a child2 of div"),
  React.createElement("img", {
    src: "https://img.freepik.com/free-photo/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way_1258-150932.jpg",
    height: "500px",
    width: "500px",
  }),
]);

const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(myReactHeader);
// myRoot.render(div);
