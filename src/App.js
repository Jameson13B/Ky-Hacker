import { useReducer } from 'react'
import { defaultState, reducer } from './stateConfig'

import { GuessesBoard } from './components/GuessesBoard'
import { StatusBoard } from './components/StatusBoard'
import { DecodingBoard } from './components/DecodingBoard'
import { Node } from './components/Node'
import { Button } from './components/Button'

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const styles = getStyles()

  return (
    <div className="App">
      <div style={styles.container}>
        <div style={styles.one}>
          <div style={styles.code}>
            {[...Array(4)].map((_, i) => (
              <Node key={i} />
            ))}
          </div>
          <GuessesBoard guessNodes={state.guessNodes} />
        </div>
        <div style={styles.two}>
          <Button style={styles.menuButton}>Menu</Button>
          <StatusBoard />
        </div>
        <div style={styles.three}>
          <DecodingBoard difficulty={state.difficulty} />
        </div>
      </div>
    </div>
  )
}

const getStyles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh',
    padding: 15,
  },
  one: {
    width: '77%',
    height: '80%',
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
    marginLeft: 10,
    height: '80%',
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
    width: '100%',
  },
})

export default App
