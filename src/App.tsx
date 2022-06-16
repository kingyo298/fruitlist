import React from "react";

import FruitsCard from "./components/FruitsCard";
import fruitsData from "./fruitsdata";
const App: React.VFC = () => {
  return (
    <div>
      <h1>Fruit List</h1>
      {fruitsData.map((fruit, index) => (
        <FruitsCard {...fruit} key={index} />
      ))}
    </div>
  );
};

export default App;
