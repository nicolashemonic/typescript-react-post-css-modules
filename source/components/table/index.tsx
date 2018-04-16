import React from "react";
import AnonymousStyleResolution from "./anonymousStyleResolution";
import NamedStyleResolution from "./namedStyleResolution";
import RuntimeStyleResolution from "./runtimeStyleResolution";
import VariableStyleResolution from "./variableStyleResolution";
import Common from "../common/index";

export default () => (
    <React.Fragment>
        <Common />
        <AnonymousStyleResolution />
        <NamedStyleResolution />
        <RuntimeStyleResolution />
        <VariableStyleResolution />
    </React.Fragment>
);
