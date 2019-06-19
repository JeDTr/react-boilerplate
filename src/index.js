import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

const Hello = () => <h1>Hello</h1>

ReactDOM.render(<Hello/>, document.getElementById('app'))

if (module.hot) {
  console.log('Hot reloading configuration success!')
}
console.log(process.env.NODE_ENV)
