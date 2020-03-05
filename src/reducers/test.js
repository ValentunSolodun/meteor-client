const INITIAL_STATE = {};

const test = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE":
      let newState = {...state};
      newState[action.payload.name] = action.payload.obj;
      return newState;
    case "TEST 2":
      return state;
    default:
      return state;
  }
}

export default test;
