import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <Header />
      <Buttons setFlag={setFlag} />
      <Display flag={flag} />
    </div>
  );
}

export default App;
