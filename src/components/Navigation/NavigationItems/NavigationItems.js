import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
)

export default navigationItems