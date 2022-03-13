import React from 'react'
import classNames from 'classnames'


const Button = ({onClick, className, children}) => {
  
  return (
    <button
      onClick={onClick}
      className={ classNames('button', {
        'button--cart': className
      }) }
    >
      {children}
    </button>
  )
}

export default Button

