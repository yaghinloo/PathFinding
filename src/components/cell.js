import React from 'react';
import {states} from "../js/constants";

const Cell = (props) => <div
    data-col={props.col}
    data-row={props.row}
    onClick={
        () => {
            props.handle(props.col, props.row)
        }
    }
    onMouseMove={
        () => {
            if (props.drawing) props.handle(props.col, props.row)
        }
    }
    className={" cell " + Object.keys(states)[props.value]}>{props.children}</div>
export default Cell
