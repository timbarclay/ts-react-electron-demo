import * as React from "react";
import ToggleContainer from "./containers/toggleContainer";
import {sayHello} from "../application/doStuff";

import "./style/app.scss";

export default () => (
    <div>
        {sayHello()}
        <ToggleContainer />
    </div>
)