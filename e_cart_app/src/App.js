import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import React, { useContext, useState } from "react";
import { apple } from "./util/context";
import { Provider } from "react-redux";
import appStore from "./util/redux/appStore";

function App() {
  const { dataName,age,school } = useContext(apple);
  const [userName, setUserName] = useState(dataName);

  return (
    <div>
      <React.StrictMode>
        <Provider store={appStore}>
          <apple.Provider
            value={{ dataName: userName, changeData: setUserName }}
          >
            <Nav />
            <Outlet />
          </apple.Provider>
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
