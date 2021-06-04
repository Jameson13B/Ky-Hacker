import React from 'react'

export const StatusBoard = ({ statusList }) => {
  const styles = getStyles()

  return (
    <div style={styles.board}>
      {statusList.map((status, i) => (
        // <div key={i} style={styles.status}>
        <div key={i} style={styles.status}>
          {status?.exact > 0 &&
            [...Array(status.exact)].map((_, i) => (
              <span key={i} className="material-icons" style={styles.checkIcons}>
                check_circle
              </span>
            ))}
          {status?.partial > 0 &&
            [...Array(status.partial)].map((_, i) => (
              <span key={i} className="material-icons" style={styles.checkIcons}>
                check_circle_outline
              </span>
            ))}
          {status?.exact === 0 && status.partial === 0 && (
            <span className="material-icons" style={styles.xIcon}>
              close
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

const getStyles = () => ({
  board: {
    alignItems: 'center',
    background: '#C4C4C4',
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '90%',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  status: {
    alignItems: 'center',
    background: 'slategray',
    display: 'flex',
    flexWrap: 'wrap',
    height: 45,
    justifyContent: 'center',
    width: '80%',
  },
  checkIcons: {
    fontSize: 20,
  },
  xIcon: {
    fontSize: 20,
  },
})
