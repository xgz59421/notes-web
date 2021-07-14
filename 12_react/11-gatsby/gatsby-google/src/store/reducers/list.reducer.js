const initialState = [
  {
    name: '',
    address: '',
    action: 'add'
  },
  {
    name: '拉勾',
    address: 'https://edu.lagou.com/',
    action: 'net'
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    case "add": {
      state.push({
        name: action.nameValue,
        address: action.addressValue,
        action: 'net'
      })
      return state
    }
    default: {
      return state
    }
  }
}
