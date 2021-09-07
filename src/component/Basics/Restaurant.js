import React from "react";
import "./Restaurant.css";
import sampleColor from './sampleColor';
import ColorPallete from "./ColorPallete";


const Restaurant = () => {
    // console.log(sampleColor)
    const cardContainer = {
        display : 'flex',
        flexDirection : 'row',
        margin: '10px',
        fontSize: '20px',
    }
  return (
   <>
   <div style = {cardContainer}>
   <ColorPallete ColorData={sampleColor} />
   </div>
   </>
  );
};

export default Restaurant;
