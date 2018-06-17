import React from 'react'
import classe from './Button.css'

const button = (props) => (
  <button className={[classe.Button, classe[props.btnType]].join(' ')} onClick={props.clicked}>
    {props.children}
  </button>
)

export default button