import { ACTION } from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };
    case ACTION.REMOVE_TASK:
      return {
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case ACTION.TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};
