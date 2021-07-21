const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case "loginSuccess":
    case "loadUserSucess": {
      return {
        success: true,
        user: action.payload,
      }
    }
    case "loginFailed": {
      return {
        success: false,
        errors: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
