const initialState = {
  entryes: [{
<<<<<<< HEAD
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
=======
    price: "1024",
    date: "01/08",
    year: "2019",
    name: "HDHD",
    icon: "🥂",
    id: 1,
  },
  {
    price: "322",
    date: "02/08",
    year: "2019",
    name: "HDzxcghvzxD",
    icon: "🍽",
    id: 2,
>>>>>>> 17db41721ac206d8fd033773eaa9c2b45e73383a
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