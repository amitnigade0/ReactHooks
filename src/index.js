import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import UseReducerExampleTodos from "./UseReducerExampleTodos"



const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <UseReducerExampleTodos/>
  </StrictMode>
);