export const defaultState = {
  difficulty: 'easy',
  guessNodes: [...Array(40)],
}

export const ACTIONS = {}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return { ...state }

    default:
      return state
  }
}
