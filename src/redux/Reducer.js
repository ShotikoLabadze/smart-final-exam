export const Reducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      return action.payload;
    default:
      return state;
  }
};
