const currentMonth = new Date().getMonth() + 1;
const initialState = currentMonth;

export default function month(state = initialState, action) {
  switch (action.type) {
    case 'GET_NEXT_MONTH':
      return state < 12 ? state + 1 : 1;
    case 'GET_PREV_MONTH':
      return state > 1 ? (state - 1) : 12;
    default:
      return state;
  }
}