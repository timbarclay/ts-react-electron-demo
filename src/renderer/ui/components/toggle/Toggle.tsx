import * as React from "react";
import "./toggle.scss";

interface IProps {
  toggle: boolean;
  onToggle: () => any;
}

export default (props: IProps) => (
  <div>
    <p>{props.toggle ? 'On' : 'Off'}</p>
    <button onClick={props.onToggle}>Toggle</button>
  </div>
);