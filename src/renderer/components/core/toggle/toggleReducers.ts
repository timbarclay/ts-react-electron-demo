import {TOGGLE} from "./toggleActions";
import {IAction} from "../../actions";

export interface IToggleState {
  on?: boolean;
}

const defaultState: IToggleState = {
  on: true
};

export function toggle(state = defaultState, action: IAction): IToggleState {
  switch(action.type){
    case TOGGLE:
      return Object.assign({}, state, {on: !state.on});
  }
  return state;
}