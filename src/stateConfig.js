export const defaultState = {}

export const ACTIONS = {}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return { ...state }

    default:
      return state
  }
}
