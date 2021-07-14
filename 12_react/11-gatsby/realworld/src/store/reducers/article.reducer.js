export default function (state = {}, action) {
  switch (action.type) {
    case "loadArticlesSuccess": {
      return {
        articles: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
