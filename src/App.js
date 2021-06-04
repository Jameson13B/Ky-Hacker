import { useEffect, useReducer, useState } from 'react'
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
  let mm = new Mastermind()
  mm.start()

  useEffect(() => {
    if (state.currentGuess.length === 4) {
      const result = mm.guess(state.currentGuess)

      if (result.winner) {
        console.log('Hooray! You win!!!')
      } else if (result.gameOver) {
        console.log('Wah! You lost!')
      } else {
        console.log(result)
        console.log(
          `You found ${result.totalExactMatches} exact matches and ${result.totalPartialMatches} partial matches`,
        )
        dispatch({})
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentGuess])

  return (
    <div className="App">
      <div style={styles.container}>
        <div style={styles.one}>
          <div style={styles.code}>
            {[...Array(4)].map((_, i) => (
              <Node key={i} />
            ))}
          </div>
          <GuessesBoard nodesList={state.nodesList} />
        </div>
        <div style={styles.two}>
          <Button onClick={() => setShowModal(true)} style={styles.menuButton}>
            Menu
          </Button>
          <StatusBoard />
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
