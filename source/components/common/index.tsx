/**
 * @file Demonstrates runtime "styleName" resolution.
 * @see https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution
 */

import React from "react";
import "./style.css";

export default function common() {
    return <p styleName="common">React + React Loadable + React Css Modules</p>;
}
