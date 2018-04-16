/**
 * @file Demonstrates runtime "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution
 */

import React from "react";
import "./style.css";
import Common from "../common/index";

export default () => (
    <React.Fragment>
        <Common />
        <p styleName="about">
            A React example project to demonstrate how to implement Css Modules and PostCss using
            TypeScript.
        </p>
    </React.Fragment>
);
