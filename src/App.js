import React from "react";
import Lang from "./context";
import Screen from "./Screen";
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" transloations={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
