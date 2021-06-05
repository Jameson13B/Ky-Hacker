import React from 'react'
import { Button } from './Button'

export const GlobalMessage = ({ message, restart }) => {
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.message}>{message}</h1>
        <Button onClick={restart} style={styles.button}>
          Try Again
        </Button>
      </div>
    </div>
  )
}

const getStyles = () => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    left: 0,
    margin: '35% auto 0',
    maxWidth: 345,
    padding: 15,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100vw',
  },
  content: {
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
  },
  message: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    color: 'slategray',
    width: '50%',
  },
})
