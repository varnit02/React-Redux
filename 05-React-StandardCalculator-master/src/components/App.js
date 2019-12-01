import React from "react";
import Calculator from "./Calculator/Calculator";

import Header from "./Header";
const App = () => (
  <div style={{ overflow: "hidden" }}>
    <Header title="React calc" />
    <div className="mt-md-5">
      <Calculator />
    </div>
  </div>
);

export default App;
