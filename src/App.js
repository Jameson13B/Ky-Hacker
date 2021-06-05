import { useEffect, useReducer, useRef, useState } from 'react'
import { ACTIONS, defaultState, reducer } from './stateConfig'
import { Mastermind } from './server/mastermind'

import { GuessesBoard } from './components/GuessesBoard'
import { StatusBoard } from './components/StatusBoard'
import { DecodingBoard } from './components/DecodingBoard'
import { Menu } from './components/Menu'
import { GlobalMessage } from './components/GlobalMessage'
import { Node } from './components/Node'
import { Button } from './components/Button'

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [showModal, setShowModal] = useState(false)
  const styles = getStyles()
  let server = useRef(new Mastermind()).current

  useEffect(() => {
    server.start(getNodes(state.difficulty))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.difficulty])

  useEffect(() => {
    if (state.currentGuess.length === 4) {
      const result = server.guess(state.currentGuess)

      if (result.winner) {
        result.code = server.getSecretCode()
        dispatch({ type: ACTIONS.SET_WINNER, payload: result })
      } else if (result.gameOver) {
        result.code = server.getSecretCode()
        dispatch({ type: ACTIONS.SET_GAME_OVER, payload: result })
      } else {
        delete result.winner
        delete result.gameOver
        dispatch({ type: ACTIONS.SET_STATUS, payload: result })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentGuess])

  return (
    <div className="App">
      <div style={styles.container}>
        <div style={styles.one}>
          <div style={styles.code}>
            {state.winner || state.gameOver
              ? state.currentCode.map((_, i) => <Node color={_.color} key={i} />)
              : [...Array(4)].map((_, i) => <Node key={i} label={!state.winner && '?'} />)}
          </div>
          <GuessesBoard nodesList={state.nodesList} />
        </div>
        <div style={styles.two}>
          <Button onClick={() => setShowModal(true)} style={styles.menuButton}>
            Menu
          </Button>
          <StatusBoard statusList={state.statusList} />
        </div>
        <div style={styles.three}>
          <DecodingBoard
            difficulty={state.difficulty}
            setColor={(color) => dispatch({ type: ACTIONS.SET_NODE_COLOR, payload: color })}
          />
        </div>
        {showModal && (
          <Menu
            difficulty={state.difficulty}
            changeDifficulty={(difficulty) => {
              setShowModal(false)
              server.start(getNodes(difficulty))
              dispatch({ type: ACTIONS.SET_DIFFICULTY, payload: difficulty })
            }}
            onClose={() => setShowModal(false)}
          />
        )}
        {(state.winner || state.gameOver) && (
          <GlobalMessage
            message={state.winner ? 'Hooray! You win!' : 'Wah! You lost!'}
            restart={() => {
              server.start(getNodes(state.difficulty))
              dispatch({ type: ACTIONS.RESTART_GAME })
            }}
          />
        )}
      </div>
    </div>
  )
}

const getStyles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '90vh',
    margin: '0 auto',
    maxWidth: 345,
    padding: 15,
  },
  one: {
    height: '80%',
    maxWidth: 265,
    width: '77%',
  },
  code: {
    alignItems: 'center',
    background: '#C4C4C4',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '10%',
    marginBottom: 10,
  },
  two: {
    height: '80%',
    marginLeft: 10,
    maxWidth: 69,
    width: '20%',
  },
  menuButton: {
    border: '2px solid',
    borderColor: 'slategray',
    height: '10%',
    width: '100%',
    marginBottom: 10,
  },
  three: {
    height: '14%',
    maxWidth: 345,
    width: '100%',
  },
})

const getNodes = (difficulty) => {
  if (difficulty === 'medium') {
    return 3
  } else if (difficulty === 'hard') {
    return 4
  } else {
    return 2
  }
}

export default App
