import "./App.css";
import CountdownTimer from "./components/countdown";
import Counter from "./components/counter";
import Todo from "./components/todolist";
import VotingSystem from "./components/voting";

function App() {
  return (
    <div>
      <Counter />
      <Todo />
      <VotingSystem/>
      <CountdownTimer/>
    </div>
  );
}

export default App;
