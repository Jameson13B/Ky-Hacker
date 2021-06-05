import React from 'react'

export const Node = (props) => {
  const { color = 'slategray', label } = props
  const styles = getStyles(color)

  return <div style={styles.node}>{label}</div>
}

const getStyles = (color) => ({
  node: {
    alignItems: 'center',
    background: color,
    borderRadius: '50%',
    color: '#C4C4C4',
    display: 'flex',
    fontSize: 20,
    fontWeight: 700,
    height: 40,
    justifyContent: 'center',
    margin: '0 11px',
    width: 40,
  },
})
