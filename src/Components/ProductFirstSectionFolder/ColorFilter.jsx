import { useProductContext, useProductDispatch } from "../ContextFolder/ProductContext";
import { useProductItemContext } from "../ContextFolder/ProductItemContext";
import { TiTick } from "react-icons/ti";
import "./ColorFilter.css";
import { useState } from "react";

const ColorFilter = () => {
  const [colorTick, setColorTick] = useState();
  const ColorFilterArr = ["#ff0000", "#000", "#CDD0D0", "#000000", "#22D3EF"];
  const dispatch = useProductDispatch();
  const { allProducts } = useProductItemContext();
  const {tickValue} = useProductContext();
  const handleColors = (colors) => {
    dispatch({
      type: "SET_COLOR_FILTER",
      payload: { AllProducts: allProducts, colors: colors },
    });
    setColorTick(colors);
  };
  return (
    <>
      <div className="ColorFilter_container">
        <h3>Colors</h3>
        <div className="color_div">
          {ColorFilterArr.map((colors, index) => {
            return (
              <div
                key={index}
                className="colors_box"
                style={{ backgroundColor: `${colors}` }}
                onClick={() => handleColors(colors)}>
                {(colorTick === colors && tickValue === true) && <TiTick className="tickIcon" />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
