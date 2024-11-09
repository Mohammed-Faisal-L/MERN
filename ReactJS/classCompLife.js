import React from "react";
import ReactDOM from "react-dom";

class LifeCycleMeth extends React.Component {
  //1.
  constructor(props) {
    //used to initialise the states and bind the events(methods)
    //but real time we use arrow func
    super(props);
    this.state = {
      text: "Mounting Phase",
      show: true,
    };
    console.log("constructor executed for the 1st time only");
  }

  //2.
  static getDerivedStateFromProps(props, state) {
    //return new state or if no change  is requried in state then return null
    console.log("getDerivedStateFromProps executed");
    return true;
  }

  //3.
  render() {
    //return jsx and no side-effects(asynchronous activity) and should not update state in render or else will cause infinite loop as defaiult behaviuour of setState is to re-render
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("updating phase");
          }}
        >
          Update
        </button>

        {this.state.show && <Child />}
      </div>
    );
  }

  //onClick event is triggring the below
  updateText = (data) => {
    this.setState({
      text: data,
      show: false,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return "scrolling position";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("-----------------------");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    console.log("-----------------------");
  }

  componentDidMount() {
    //1st time mounting to real dom
    // 1. used to make side-effects(asynchronous code) i.e making api calls, iteracting with dom
    //2. used to update the state
    console.log("componentDidMount executed");
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("child componentWillUnmount executed");
  }
  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}

ReactDOM.render(<LifeCycleMeth />, document.getElementById("root"));
