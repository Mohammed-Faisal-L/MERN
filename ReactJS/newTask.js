let div = React.createElement(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "center",
      height: "100px",
      width: "300px",
      gap: "10px",
    },
  },
  [
    React.createElement(
      "div",
      {
        style: {
          height: "100px",
          width: "100px",
          border: "1px solid white",
          backgroundColor: "yellow",
        },
      },
      "Yellow"
    ),
    React.createElement(
      "div",
      {
        style: {
          height: "100px",
          width: "100px",
          border: "1px solid white",
          backgroundColor: "red",
        },
      },
      "Red"
    ),
    React.createElement(
      "div",
      {
        style: {
          height: "100px",
          width: "100px",
          border: "1px solid white",
          backgroundColor: "pink",
        },
      },
      "Pink"
    ),
  ]
);
const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(div);

const myMain = ReactDOM.createRoot(document.getElementById("main"));
let blue = React.createElement(
  "div",
  {
    style: {
      marginTop: "1%",
      height: "100px",
      width: "300px",
      border: "1px solid white",
      backgroundColor: "blue",
    },
  },
  "blue"
);
myMain.render(blue);
