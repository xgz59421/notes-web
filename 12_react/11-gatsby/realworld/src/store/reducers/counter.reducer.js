const initialState = {
  count: 0,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "increment": {
      return {
        count: state.count + 1,
      }
    }
    default: {
      return state
    }
  }
}
