import React, {useState} from "react";
import {defaultBoardSize} from "../js/constants"

const ControlBar = (props) => {
    let [size, setSize] = useState(defaultBoardSize);
    let [isOrthogonal, setIsOrthogonal] = useState(true);
    return <div><label>Board Size </label>
        <input id="size"
               value={size}
               onChange={(e) => {
                 setSize(e.target.value)
               }}/>
        {/*
         // TODO : ADD diagonal paths
         <label> Go Diagonal </label>
        <input type="checkbox"
               id="isOrthogonal"
               checked={isOrthogonal}
               onChange={(e) => {
                   setIsOrthogonal(e.target.checked)

               }}/>  */}
        <button onClick={() => props.updateBoard(Number(size), isOrthogonal)}> Update Settings</button>
    </div>;
}

export default ControlBar;
