import React from 'react'

import { Node } from './Node'

export const GuessesBoard = (props) => {
  const styles = getStyles()

  return (
    <div style={styles.board}>
      {[...Array(40)].map((_, i) => (
        <Node key={i} />
      ))}
    </div>
  )
}

const getStyles = () => ({
  board: {
    alignItems: 'center',
    background: '#C4C4C4',
    display: 'flex',
    height: '90%',
    justifyContent: 'space-evenly',
    width: '100%',
    flexWrap: 'wrap',
  },
  hr: {
    borderColor: 'slategray',
    borderWidth: 3,
    margin: '2px 7.5%',
    width: '85%',
  },
})
