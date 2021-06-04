import React from 'react'
import { Button } from './Button'

export const Menu = ({ onClose }) => {
  const styles = getStyles()

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to the world of Ky Hacker</h1>
        <Button onClick={onClose} style={styles.menuButton}>
          Close
        </Button>
      </div>

      <h2 style={styles.subtitle}>Getting Started</h2>
      <ul>
        <li style={styles.listItem}>A decoding board at one end with 3-6 buttons.</li>
        <li style={styles.listItem}>
          A guesses board with 10 rows containing four large nodes/holes.
        </li>
        <li style={styles.listItem}>
          A status board next to each of the 10 rows in the guesses board.
        </li>
      </ul>

      <h2 style={styles.subtitle}>How to Play</h2>
      <p style={styles.paragraph}>
        Player tries to guess the pattern, in both order and color, within ten turns.
      </p>
      <p style={styles.paragraph}>
        Each guess is made by clicking the colored buttons in the decoding board. Once placed,
        feedback is provided on the status board.
      </p>
      <ul>
        <li style={styles.listItem}>
          A BLACK indicates a node is corect in both color and position.
        </li>
        <li style={styles.listItem}>
          A WHITEindicates a node is correct in color but wrong position.
        </li>
      </ul>

      <h2 style={styles.subtitle}>Winning</h2>
      <p>
        Player wins by guessing the correct colors and order of all noodes in 10 guesses or less.
      </p>

      <div style={styles.buttonGroup}>
        <Button style={styles.difficultyButton}>Easy</Button>
        <Button style={styles.difficultyButton}>Medium</Button>
        <Button style={styles.difficultyButton}>Hard</Button>
      </div>
      <p style={styles.link}>
        Visit Kyler: <a href="https://www.kyleroldroyd.com">www.kyleroldroyd.com</a>
      </p>
    </div>
  )
}

const getStyles = () => ({
  container: {
    background: 'white',
    height: '100vh',
    left: 0,
    right: 0,
    margin: '0 auto',
    maxWidth: 345,
    padding: 15,
    position: 'absolute',
    top: 0,
    width: '100vw',
  },
  header: {
    display: 'flex',
  },
  title: {
    flexGrow: 3,
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    padding: '0 10px',
  },
  menuButton: {
    border: '2px solid',
    borderColor: 'slategray',
    height: 45,
    width: 67,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 700,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 15,
    lineHeight: 1.25,
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 17,
    lineHeight: 1.25,
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  difficultyButton: {
    color: 'black',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace',
    fontWeight: 700,
    width: '20%',
  },
  link: {
    fontSize: 15,
    marginTop: 15,
    lineHeight: 1.25,
    textAlign: 'center',
  },
})
