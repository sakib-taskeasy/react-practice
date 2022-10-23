import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import RouteIndex from "./routes/RouteIndex"

import Protected from "./routes/Protected";

function App() {
  return (
      <RouteIndex />
  );
}

export default App;
