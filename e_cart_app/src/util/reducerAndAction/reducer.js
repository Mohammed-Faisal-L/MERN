import { ACTION } from "./action";

export const reducer = (state, action) => {
  switch (action) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };

    case ACTION.DECREMENT:
      return { count: state.count - 1 };

    case ACTION.MULTIPLYTEN:
      return { count: state.count * 10 };

    case ACTION.ZERO:
      return { count: 0 };

    default:
      return state;
  }
};
