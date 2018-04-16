/**
 * @file Demonstrates runtime "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution
 */

import React from "react";
import "./style.css";

export default () => (
    <div styleName="table">
        <div styleName="row">
            <div styleName={"cell" + (Math.random() > 0.5 ? " gold" : "")}>A2</div>
            <div styleName={"cell" + (Math.random() > 0.5 ? " gold" : "")}>B2</div>
            <div styleName={"cell" + (Math.random() > 0.5 ? " gold" : "")}>C2</div>
        </div>
    </div>
);
