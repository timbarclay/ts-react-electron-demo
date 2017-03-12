import {connect} from "react-redux";
import {IState} from "../rootReducer";
import {toggle} from "../components/toggle/toggleActions";
import Toggle from "../components/toggle/Toggle";

const mapStateToProps = (state: IState) => {
  return {
    toggle: state.toggle.on
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);