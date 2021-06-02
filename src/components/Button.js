import React from 'react'
import { css } from 'glamor'

export const Button = (props) => {
  const { children, color, onClick, variant = 'primary', ...rest } = props
  const styles = getStyles(color)

  return (
    <button className={`${styles} custom-${variant}`} onClick={onClick} type="button" {...rest}>
      {children}
    </button>
  )
}

const getStyles = (color) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: 16,
    fontWeight: 400,
    position: 'relative',
    padding: `0px 12px`,
    margin: 0,
    width: 'auto',
    height: '44px',
    transition: `all 300ms cubic-bezier(.475,.425,0,.995)`,
    ':focus': {
      outline: 'none',
      boxShadow: '0px 0px 0px 2px rgba(82, 138, 224, 0.8)',
    },
    [`.custom-primary`]: {
      backgroundColor: color ?? '#C4C4C4',
      color: 'slategray',
      '@media(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: 'slategray',
          color: 'white',
        },
      },
    },
    // [`.custom-neutral`]: {
    //   backgroundColor: tokens.BackgroundColor.ButtonNeutral,
    //   border: '1px solid',
    //   borderColor: tokens.BorderColor.ButtonNeutral,
    //   color: tokens.TextColor.ButtonNeutral,
    //   ':hover': {
    //     color: tokens.TextColor.ButtonNeutralHover,
    //     backgroundColor: tokens.BackgroundColor.ButtonNeutralHover,
    //     borderColor: tokens.BorderColor.ButtonNeutralHover,
    //   },
    // },
  })
