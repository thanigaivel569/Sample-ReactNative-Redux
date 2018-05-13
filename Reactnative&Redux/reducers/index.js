import {
  INC,
  DEC,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS
} from "../actionTypes";

function counterReducer(
  prevState = {
    counter: 0,
    tickedSeconds: 0,
    timerRef: null,
    currentAction: "STOP"
  },
  action
) {
  console.log(action, prevState);
  switch (action.type) {
    case INC:
      return { counter: prevState.counter + 1 };
    case DEC:
      return { counter: prevState.counter - 1 };
    case GET_PRODUCTS:
      return { ...prevState, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...prevState, isLoading: false, products: action.products };
    case GET_PRODUCTS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    case "START":
      return { ...prevState, currentAction: "START" };
    case "STARTED":
      return {
        ...prevState,
        currentAction: "STARTED",
        timerRef: action.timerRef
      };
    case "STOP":
      return { ...prevState, currentAction: "STOP" };
    case "STOPPED":
      return { ...prevState, currentAction: "STOPPED", timerRef: null };
    case "TICK":
      return {
        ...prevState,
        tickedSeconds: prevState.tickedSeconds + 1
      };
    default:
      return prevState;
  }
}

export default counterReducer;
