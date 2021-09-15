import React from "react";
import "./App.css";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import Feeds from "./components/Feeds";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        {/* SideBar */}
        <Siderbar />
        {/* Feeds Section */}
        <Feeds />
      </div>
    </div>
  );
}

export default App;
