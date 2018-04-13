import React from "react";
import AnonymousStyleResolution from "./anonymousStyleResolution";
import NamedStyleResolution from "./namedStyleResolution";
import RuntimeStyleResolution from "./runtimeStyleResolution";

export default () => (
    <React.Fragment>
        <AnonymousStyleResolution />
        <NamedStyleResolution />
        <RuntimeStyleResolution />
    </React.Fragment>
);
