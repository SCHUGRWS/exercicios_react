import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponente from './classComponent'

ReactDOM.render(
    <ClassComponente label="Contador" initialValue={10}></ClassComponente>
    ,
    document.getElementById('app')
)