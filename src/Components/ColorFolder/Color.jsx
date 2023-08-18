import { useState } from "react";
import "./Color.css";
import { TiTick } from "react-icons/ti";
import { useProductDispatch } from "../ContextFolder/ProductContext";

const ColorComponent = ({ colorsArr = [" "] }) => {
  const [selectColor, setSelectColor] = useState();
  const dispatch = useProductDispatch();
  return (
    <>
      <div className="color_container mrb">
        <div className="color_title">Color : </div>
        {colorsArr.map((curColor, index) => {
          return (
            <div
              className="color_box"
              key={index}
              style={{ backgroundColor: `${curColor}` }}
              onClick={() => {
                setSelectColor(curColor);
                dispatch({
                  type: "color_load",
                  payload: { selectColors: curColor },
                });
              }}>
              {curColor === selectColor && <TiTick className="tickIcon" />}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColorComponent;
