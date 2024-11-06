import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
