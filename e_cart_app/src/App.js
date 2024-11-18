import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import React, { useContext, useState } from "react";
import { context } from "./util/context";
import { Provider } from "react-redux";
import appStore from "./util/redux/appStore";

function App() {
  const { dataName, age, school } = useContext(context);
  const [userName, setUserName] = useState(dataName);

  return (
    <div>
      <React.StrictMode>
        <Provider store={appStore}>
          <context.Provider
            value={{ dataName: userName, changeData: setUserName }}
          >
            <Nav />
            <Outlet />
          </context.Provider>
        </Provider>
      </React.StrictMode>
    </div>
  );
}

export default App;
