import React from 'react'

export const Node = (props) => {
  const { color = 'slategray' } = props
  const styles = getStyles(color)

  return <div style={styles.node} />
}

const getStyles = (color) => ({
  node: {
    background: color,
    borderRadius: '50%',
    height: 40,
    margin: '0 11px',
    width: 40,
  },
})
