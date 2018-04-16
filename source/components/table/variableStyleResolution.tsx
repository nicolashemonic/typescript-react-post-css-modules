/**
 * @file Demonstrates autocomplete / go to definition class name using VS Code Css Modules extension
 * @see https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules
 */

import React from "react";
import style from "./style.css";

export default () => (
    <div className={style.table}>
        <div className={style.row}>
            <div className={`${style.cell} ${Math.random() > 0.5 ? style.gold : ""}`}>A3</div>
            <div className={`${style.cell} ${Math.random() > 0.5 ? style.gold : ""}`}>B3</div>
            <div className={`${style.cell} ${Math.random() > 0.5 ? style.gold : ""}`}>C3</div>
        </div>
    </div>
);
