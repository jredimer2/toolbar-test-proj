export const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPTION1":
      return {
        ...state,
        option1: action.payload,
      };

    case "SET_OPTION2":
      return {
        ...state,
        option2: action.payload,
      };

    case "SET_ID":
      return {
        ...state,
        id: action.payload,
      };

    default:
      return state;
  }
};
