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
      nodesList[state.currentNodeIndex] = { color: action.payload }

      if (state.currentGuess.length === 4) {
        // TODO: Check currentGuess against code
        // Provide update to status or update as winner
      }

      return {
        ...state,
        nodesList,
        currentGuess:
          state.currentGuess.length < 4
            ? [...state.currentGuess, action.payload.color]
            : [action.payload.color],
        currentNodeIndex: state.currentNodeIndex++,
      }

    default:
      return state
  }
}
