import React from "react";
interface Fruit {
  imgUrl: string;
  title: string;
  calorie: number;
  macro: {
    protein: number;
    fat: number;
    carbonhydrate: number;
  };
}
const FruitCard: React.VFC<Fruit> = (props) => {
  return (
    <div className="border-2 border-slate-300 rounded-md hover:outline hover:outline-slate-300 hover:outline-2 shadow-lg hover:shadow-xl transition ease-in-out duration-100 hover:scale-105 hover:cursor-pointer p-10">
      <div>
        <div className="mb-12 border">
          <img src={props.imgUrl} alt="fruit" className="h-32 m-auto" />
        </div>
        <div>
          <p className="mb-6 font-bold">{props.title}</p>
          <p className="mb-6">Calorie: {props.calorie} kcal/ 100g</p>
          <p>
            Macro: P {props.macro.protein}g F {props.macro.fat}g C
            {props.macro.carbonhydrate}g
          </p>
        </div>
      </div>
    </div>
  );
};

export default FruitCard;
