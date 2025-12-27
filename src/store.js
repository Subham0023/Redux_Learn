import { createStore } from "redux";

// Initial State
const initialState = {
  user: {
    username: "Subham",
    balance: 25000,
  },
};

export const addMoney = (amt) => ({
  type: "addMoney",
  payload: amt,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case "addMoney":
      return {
        user: {
          username: state.user.username,
          balance: state.user.balance + action.payload,
        },
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
