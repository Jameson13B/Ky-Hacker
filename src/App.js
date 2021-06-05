import { useEffect, useReducer, useRef, useState } from 'react'
import { ACTIONS, defaultState, reducer } from './stateConfig'
import { Mastermind } from './server/mastermind'

import { GuessesBoard } from './components/GuessesBoard'
import { StatusBoard } from './components/StatusBoard'
import { DecodingBoard } from './components/DecodingBoard'
import { Menu } from './components/Menu'
import { Node } from './components/Node'
import { Button } from './components/Button'

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [showModal, setShowModal] = useState(false)
  const styles = getStyles()
  const server = useRef(new Mastermind()).current

  useEffect(() => {
    server.start()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (state.currentGuess.length === 4) {
      const result = server.guess(state.currentGuess)

      if (result.winner) {
        alert('Hooray! You win!!!')
        result.code = server.getSecretCode()
        dispatch({ type: ACTIONS.SET_WINNER, payload: result })
      } else if (result.gameOver) {
        alert('Wah! You lost!')
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
        {showModal && <Menu onClose={() => setShowModal(false)} />}
      </div>
    </div>
  )
}

const getStyles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh',
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

export default App
