import React, { useState, useEffect } from "react";
import "./App.css";
import Articles from "./components/Articles";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <p className="opening">
        Welcome to <code>ReadMe</code>, The place where you read you morning
        newspaper
      </p>
      <Articles />
    </>
  );
}

export default App;
