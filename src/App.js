import { useReducer } from 'react'
import { defaultState, reducer } from './stateConfig'

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Ky Hacker</h1>
      </header>
    </div>
  )
}

export default App
