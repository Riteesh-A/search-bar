import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import SongData from "./Data.json";

//mongodb connection

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Search" data={SongData} />
    </div>
  );
}

export default App;
