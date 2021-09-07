import React from "react";

const ColorPallete = ({ ColorData }) => {
  console.log(ColorData);

  return (
    <>
      {ColorData.map((items) => {
        const hexCode = (items.code.hex);
        const rgbA = (items.code.rgba).toString();
        const rgba = 'rgba(' + rgbA + ')'
        console.log(rgba ,typeof(rgba))
        return (
            <div className="card-container" key={items.id} style={{margin : '10px'}}>
              <div className="card">
                <div>Name of the Color : {items.color}</div>
                <div style={{ backgroundColor: rgba }}>AND this is the color</div>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default ColorPallete;
