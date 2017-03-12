import {IAction} from "../../actions";

export const TOGGLE = "TOGGLE";

export function toggle(): IAction {
  return {
    type: TOGGLE
  };
}