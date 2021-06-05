import { Mastermind } from './server/mastermind'

export const server = new Mastermind()

// Create a default array with all set to grey
let defaultArray = Array(40)
for (let i = 0; i < defaultArray.length; i++) {
  defaultArray[i] = { color: 'slategray' }
}

export const defaultState = {
  // List of all nodes for GuessesBoard
  nodesList: defaultArray,
  // List of current color/codes for guess(auto resets after 4)
  currentGuess: [],
  // List of statuses for each set of guesses
  statusList: [...Array(10)],
  // List of colors/codes for current code
  currentCode: [],
  // Current index for guess on nodesList
  currentNodeIndex: 0,
  // Current index for statusList update
  currentStatusIndex: 0,
  // SETTINGS
  difficulty: 'easy',
  winner: false,
  gameOver: false,
}

export const ACTIONS = {
  SET_NODE_COLOR: 'set_node_color',
  SET_STATUS: 'set_status',
  SET_WINNER: 'set_winner',
  SET_GAME_OVER: 'set_game_over',
  SET_DIFFICULTY: 'set_difficulty',
  RESTART_GAME: 'restart_game',
}

export const reducer = (state, action) => {
  let statusList = [...state.statusList]

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
      statusList[state.currentStatusIndex] = {
        exact: action.payload.totalExactMatches,
        partial: action.payload.totalPartialMatches,
      }

      return {
        ...state,
        statusList,
        currentStatusIndex: state.currentStatusIndex + 1,
      }
    case ACTIONS.SET_WINNER:
      statusList[state.currentStatusIndex] = {
        exact: action.payload.totalExactMatches,
        partial: action.payload.totalPartialMatches,
      }

      return {
        ...state,
        statusList,
        winner: true,
        currentCode: action.payload.code.map((el) => ({ color: ColorMap[el], code: el })),
      }
    case ACTIONS.SET_GAME_OVER:
      statusList[state.currentStatusIndex] = {
        exact: action.payload.totalExactMatches,
        partial: action.payload.totalPartialMatches,
      }

      return {
        ...state,
        statusList,
        gameOver: true,
        currentCode: action.payload.code.map((el) => ({ color: ColorMap[el], code: el })),
      }
    case ACTIONS.SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      }
    case ACTIONS.RESTART_GAME:
      return {
        ...defaultState,
        difficulty: state.difficulty,
      }
    default:
      return state
  }
}

const ColorMap = {
  0: 'green',
  1: 'red',
  2: 'yellow',
  3: 'blue',
}
