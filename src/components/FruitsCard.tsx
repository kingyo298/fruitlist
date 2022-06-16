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
    <div>
      <div>
        <img src={props.imgUrl} alt="fruit" />
        <div>
          <strong>{props.title}</strong>
          <p>Calorie: {props.calorie} kcal/ 100g</p>
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
