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
  winner: false,
  gameOver: false,
}

export const ACTIONS = {
  SET_NODE_COLOR: 'set_node_color',
  SET_STATUS: 'set_status',
  SET_WINNER: 'set_winner',
  SET_GAME_OVER: 'set_game_over',
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
    case ACTIONS.SET_STATUS:
      return { ...state }
    case ACTIONS.SET_WINNER:
      return { ...state, winner: true }
    case ACTIONS.SET_GAME_OVER:
      return { ...state, gameOver: true }
    default:
      return state
  }
}
