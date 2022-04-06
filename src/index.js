import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import RecordingsUpload from "./Components/Faculty/RecordingsUpload";
import StreamMongo from "./StreamMongo";
import Checkrecordings from "./Components/Student/Checkrecordings";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
