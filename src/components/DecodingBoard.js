import React from 'react'
import { Button } from './Button'

export const DecodingBoard = ({ difficulty, setColor }) => {
  const styles = getStyles(difficulty)

  return (
    <div style={styles.board}>
      <Button color="green" onClick={() => setColor('green')} style={styles.button} />
      <Button color="red" onClick={() => setColor('red')} style={styles.button} />
      <Button color="yellow" onClick={() => setColor('yellow')} style={styles.button} />
      <Button color="blue" onClick={() => setColor('blue')} style={styles.button} />
      {difficulty === 'medium' && (
        <Button color="pink" onClick={() => setColor('pink')} style={styles.button} />
      )}
    </div>
  )
}

const getStyles = (difficulty) => {
  let btnWidth = '15%' // Default for easy

  if (difficulty === 'medium') {
    btnWidth = '12%'
  } else if (difficulty === 'hard') {
    btnWidth = '9%'
  }

  return {
    board: {
      alignItems: 'center',
      background: '#C4C4C4',
      display: 'flex',
      height: '100%',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    button: {
      height: '60%',
      width: btnWidth,
    },
  }
}
