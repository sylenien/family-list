const initialState = {
  entryes: []
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTRY': 
      return {
        ...state, entryes: [...state.entryes, action.payload]
      };
    default: 
      return state;
  }
}