import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebarmenu from "./components/Sidebar/Sidebarmenu";
import AffinityHub from "./Pages/AffinityHub/AffinityHub";

function App() {
  return (
    <div className="App">
      <Sidebarmenu />
      <div className="content">
        <AffinityHub />
      </div>
    </div>
  );
}

export default App;
