import React from 'react'
import { render } from 'react-dom'
import { fnA } from './util'
import './index.scss'

const App = props => {
    const a = () => fnA()
    return <div className="app" onClick={a}>hello, webpack</div>
}

render(<App/>, window.document.getElementById('app'))