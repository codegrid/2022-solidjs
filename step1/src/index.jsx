/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

window.addEventListener('load', () => {
  render(() => <App />, document.getElementById('root'))
}, false)
