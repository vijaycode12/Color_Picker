import { useState } from "react";
export default function ColorPicker(){
   const [color,setColor] = useState("#704343")

   function handleColorchange(e){
        setColor(e.target.value);
   }
   return (
    <div className="colorpicker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorchange}/>
    </div>);
}