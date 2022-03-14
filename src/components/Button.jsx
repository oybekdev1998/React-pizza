import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  onClick: PropTypes.func
}
export default Button

