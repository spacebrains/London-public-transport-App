import React from 'react'
import { render } from 'react-dom'
import App from './App/App'
import lineList from './data/data'
import './index.css'

render(
    <App data={lineList}/>,
    document.getElementById('root')
);