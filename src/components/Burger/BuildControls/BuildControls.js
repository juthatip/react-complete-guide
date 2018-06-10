import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildcontrols = (props) => (
  <div className={classes.Buildcontrols}>
  <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl, i) => {
      return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)} 
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]} />
    })}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchaseable}>ORER NOW</button>
  </div>
)
        
export default buildcontrols