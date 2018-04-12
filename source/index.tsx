import React from "react";
import ReactDom from "react-dom";
import AnonymousStyleResolution from "./components/table/anonymousStyleResolution";
import NamedStyleResolution from "./components/table/namedStyleResolution";
import RuntimeStyleResolution from "./components/table/runtimeStyleResolution";

ReactDom.render(
    <React.Fragment>
        <AnonymousStyleResolution />
        <NamedStyleResolution />
        <RuntimeStyleResolution />
    </React.Fragment>,
    document.getElementById("main")
);
