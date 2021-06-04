// Create a default array with all set to grey
let defaultArray = Array(40)
for (let i = 0; i < defaultArray.length; i++) {
  defaultArray[i] = { color: 'slategray' }
}

export const defaultState = {
  nodesList: defaultArray,
  difficulty: 'easy',
  currentGuess: [],
  currentNodeIndex: 0,
}

export const ACTIONS = {
  SET_NODE_COLOR: 'set_node_color',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NODE_COLOR:
      const nodesList = [...state.nodesList]
      nodesList[state.currentNodeIndex] = { color: action.payload.color, code: action.payload.code }

      return {
        ...state,
        nodesList,
        currentGuess:
          state.currentGuess.length < 4
            ? [...state.currentGuess, action.payload.code]
            : [action.payload.code],
        currentNodeIndex: state.currentNodeIndex + 1,
      }

    default:
      return state
  }
}
