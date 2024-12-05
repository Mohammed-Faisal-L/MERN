import { ACTIONS } from "./action";

export const reducer = (state, action) => {
  switch (action) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    case ACTIONS.RESET:
      return { count: 0 };

    default:
      return state;
  }
};
