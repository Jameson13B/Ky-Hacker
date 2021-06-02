import React from 'react'

export const StatusBoard = (props) => {
  const styles = getStyles()

  return (
    <div style={styles.board}>
      {[...Array(10)].map((_, i) => (
        <div key={i} style={{ background: 'slategray', height: 45, width: '80%' }} />
      ))}
    </div>
  )
}

const getStyles = () => ({
  board: {
    alignItems: 'center',
    background: '#C4C4C4',
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'space-evenly',
    width: '100%',
  },
})
