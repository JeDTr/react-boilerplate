import React, { useState } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import Hello from "@/components/Hello";

import "./index.scss";

const App = hot(() => {
  return <Hello />;
});

ReactDOM.render(<App />, document.getElementById("app"));

// if (module.hot) {
//   console.log("Hot reloading configuration success!");
// }
console.log(process.env.NODE_ENV);
