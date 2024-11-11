import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import { useContext, useState } from "react";
import { apple } from "./util/context";

function App() {
  const { dataName } = useContext(apple);
  const [userName, setUserName] = useState(dataName);

  return (
    <div>
      <Nav />
      <apple.Provider value={{ dataName: userName, changeData: setUserName }}>
        <Outlet />
      </apple.Provider>
    </div>
  );
}

export default App;
