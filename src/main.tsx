import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";
import App from "./App";
import "./index.css";

// Add Font Awesome icons to library
library.add(faKaggle);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
