import React from "react";
import "./App.css";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import Feeds from "./components/Feeds";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            {/* SideBar */}
            <Siderbar />
            {/* Feeds Section */}
            <Feeds />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
