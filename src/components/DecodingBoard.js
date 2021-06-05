import React from 'react'
import { Button } from './Button'

export const DecodingBoard = ({ difficulty, setColor }) => {
  const styles = getStyles(difficulty)

  return (
    <div style={styles.board}>
      <Button
        color="green"
        onClick={() => setColor({ color: 'green', code: 0 })}
        style={styles.button}
      />
      <Button
        color="red"
        onClick={() => setColor({ color: 'red', code: 1 })}
        style={styles.button}
      />
      <Button
        color="yellow"
        onClick={() => setColor({ color: 'yellow', code: 2 })}
        style={styles.button}
      />
      {(difficulty === 'medium' || difficulty === 'hard') && (
        <Button
          color="blue"
          onClick={() => setColor({ color: 'blue', code: 3 })}
          style={styles.button}
        />
      )}
      {difficulty === 'hard' && (
        <Button
          color="pink"
          onClick={() => setColor({ color: 'pink', code: 4 })}
          style={styles.button}
        />
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
