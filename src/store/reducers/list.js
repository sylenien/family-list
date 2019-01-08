const initialState = {
  entryes: [{
    price: '3322',
    date: new Date().toDateString(),
    name: 'HDHD',
    icon: '🔥',
    id: 1,
  },
  {
    price: '322',
    date: new Date().toDateString(),
    name: 'HDzxcghvzxD',
    icon: '🔥',
    id: 1,
  }
]
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