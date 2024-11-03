import "./App.css";
import CountDownTimer from "./components/countdown";
import Counter from "./components/counter";
import Todo from "./components/todolist";
import VotingSystem from "./components/voting";

function App() {
  return (
    <div>
      <Counter />
      <Todo />
      <VotingSystem />
      <CountDownTimer />
    </div>
  );
}

export default App;
