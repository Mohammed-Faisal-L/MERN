import React from '/node_modules/react'
import ReactDOM from "/node_modules/react-dom";

// This is from pure JS
const miDiv = document.getElementById("main");
const myHeader = document.createElement("h1");
myHeader.innerText = "Hello from js";
// miDiv.appendChild(myHeader);

// my html code
{/* <div>
    <h1>I am child of div</h1>
</div> */}

// this is from React
const myReactHeader = React.createElement("div", { id: "reactHead", abc: "style" }, "Hello from React");
// creating the child and parent elements in React
const myDiv = React.createElement("div", {}, ["this si just content", React.createElement("h1", {}, "I am child of div"), React.createElement("img", { src: "https://cdn.pixabay.com/photo/2023/12/11/12/51/lynx-8443540_1280.jpg", height: "50px", width: "50px" })])

// const myRoot = ReactDOM.createRoot(document.getElementById("root"));
// myRoot.render(myReactHeader);
// myRoot.render(myDiv)



// what is jsx?
// its a language which looks similar to the syntax of HTML or xml, where we can write both JS and HTML code.

const myNewHeader = React.createElement("h1", {}, "Hello I am from React");


const myRoot = ReactDOM.createRoot(document.getElementById("root"))
myRoot.render(myNewHeader);

// creating root for jsx element

const myJsxHeader = (
    <div>
        <h1>I am child of div</h1>
    </div>
)

const jsxRoot = ReactDOM.createRoot(document.getElementById("jsxRoot"))
// jsxRoot.render(myJsxHeader)

console.log(myJsxHeader, "from jsx")
console.log(myNewHeader, 'from react')

// Component?
// components are js functions which returns you the JSX 
const myStyle = { color: "yellow", backgroundColor: "skyblue" }
const MyComponent = () => {
    const myFn = () => {
        return (<h1>hello</h1>)
    }
    const a = 20;
    return (
        <div>
            <div style={myStyle}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum praesentium tempore nisi, libero veniam ipsum optio vero fugit ullam doloribus vitae accusantium asperiores sunt saepe cumque nostrum commodi enim magnam.</p>
            </div>
            {myFn()}
        </div>
    )
}

// jsxRoot.render(MyComponent())
jsxRoot.render(<MyComponent></MyComponent>)