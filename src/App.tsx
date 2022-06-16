import React from "react";

import FruitsCard from "./components/FruitsCard";
import fruitsData from "./fruitsdata";
const App: React.VFC = () => {
  return (
    <div className="container mx-auto px-8 mb-32">
      <h1 className="text-center text-3xl mt-16 mb-24 font-bold border-b-4 pb-4 border-green-500 m-auto w-1/6">
        Fruit List
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {fruitsData.map((fruit, index) => (
          <FruitsCard {...fruit} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
