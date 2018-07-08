import React from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-my-burger-5bbcc.firebaseio.com/'
})

export default instance