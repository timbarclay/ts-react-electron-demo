import * as Redux from "redux";
import {toggle, IToggleState} from "./core/toggle/toggleReducers";

export interface IState {
  toggle: IToggleState
}

export default Redux.combineReducers({
  toggle: toggle
});