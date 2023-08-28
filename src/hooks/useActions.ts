import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
    const dispatch = useDispatch();

    // returns action creators for each action string
    return bindActionCreators(actionCreators, dispatch);
}