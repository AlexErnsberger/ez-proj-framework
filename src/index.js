import React from 'react'
import { render } from 'react-dom'
import './index.scss'

const App = props => {
    return <div className="app">hello, webpack</div>
}

render(<App/>, window.document.getElementById('app'))