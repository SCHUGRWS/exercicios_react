import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Schug">
        <Member name="Richard"></Member>
        <Member name="Suzana"></Member>
    </Family>,
    document.getElementById('app')
)